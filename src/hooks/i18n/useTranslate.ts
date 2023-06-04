import { useMemo } from "react";

let _loadedFile: { dictionary: any } = null;
const _hashDict = {};

/**
 * Uses a dictionary to store the result of a function call,
 * so that the function is not called again with the same arguments.
 *  *
 * @param fn The function to be memoized
 * @param memoKey [Optional] The key to be used in the dictionary.
 * @returns
 */
function memoize<T>(fn: () => T, memoKey?: undefined | string) {
	const resolvedKey = !memoKey ? fn.toString() : memoKey;

	// In case the memoization hasn't been done yet
	if (!_hashDict[resolvedKey]) {
		_hashDict[resolvedKey] = fn();
	}

	return _hashDict[resolvedKey];
}

/**
 * Contract for the possible languages state object.
 */
interface i18nState {
	language: string;
}

/**
 * The possible languages state object.
 */
const i18n: i18nState = {
	language: "en_us"
};

/**
 * Finds the translation entry in the lang file and replaces the params.
 *
 * @param key The key of the translation entry.
 * @param params [Optional] The params to be replaced in the translation entry.
 * @returns The translated string.
 */
function findTranslationKey(key: string, params: any) {
	let resolvedTranslation: string;
	const langFile = memoize(
		// () => require(`/lang/${i18n.language}.js`),
		async (): Promise<{ dictionary: any }> => {
			debugger;
			_loadedFile = await import(`./lang/${i18n.language}.js`);

			return _loadedFile?.dictionary ?? {};
		},
		i18n.language
	);

	debugger;

	const foundKey =
		Object.keys(langFile).find(
			(translationKey) => translationKey === key
		) ?? null;

	if (!foundKey) return key;

	// Picks the translation entry from the lang file
	resolvedTranslation = langFile.dictionary[foundKey];

	if (params) {
		// Replaces the params in the translation entry
		Object.keys(params).forEach((paramKey) => {
			resolvedTranslation = resolvedTranslation.replace(
				new RegExp(`@{${paramKey}}`, "g"),
				params[paramKey]
			);
		});
	}

	return resolvedTranslation;
}

/**
 * Alias for findTranslationKey.
 */
export function translate(key: string, params?: any) {
	return findTranslationKey(key, params);
}

/**
 * Custom hook for translating strings.
 * @param key The key of the translation entry.
 * @param params The params to be replaced in the translation entry.
 * @returns The translated string.
 * @example
 * const translation = useTranslate("hello", { name: "John" });
 * // The param "name" is used in the translation entry, so it is replaced.
 * // translation = "Hello, John!"
 * @example
 * const translation = useTranslate("hello");
 * // translation = "Hello, \@{name}!"
 * // The param "name" is not used in the translation entry, so it is not replaced.
 * @example
 * const translation = useTranslate("hello", { name: "John", age: 20 });
 * // translation = "Hello, John!"
 * // The param "age" is not used in the translation entry, so it is ignored.
 */
export function useTranslate(key: string, params?: any) {
	const translation = useMemo(
		() => findTranslationKey(key, params),
		[key, params]
	);

	return translation;
}
