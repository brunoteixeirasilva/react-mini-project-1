import { useMemo } from "react";

declare type LangFile = { dictionary: any };

let _loadedFile: LangFile = null;
const _hashDict = {};

/**
 * (Async) Uses a dictionary to store the result of a function call,
 * so that the function is not called again with the same arguments.
 *  *
 * @param fn The function to be memoized
 * @param memoKey [Optional] The key to be used in the dictionary.
 * @returns
 */
function memoizeAsync<T>(
	fn: () => Promise<T>,
	memoKey?: undefined | string
): () => Promise<T> {
	const resolvedKey = !memoKey ? fn.toString() : memoKey;

	return async function () {
		_hashDict[resolvedKey] =
			_hashDict[resolvedKey] || fn.apply(undefined, arguments);

		return _hashDict[resolvedKey];
	};
}

/**
 * Uses a dictionary to store the result of a function call,
 * so that the function is not called again with the same arguments.
 *  *
 * @param fn The function to be memoized
 * @param memoKey [Optional] The key to be used in the dictionary.
 * @returns
 */
function memoize<T>(fn: () => T, memoKey?: undefined | string): () => T {
	const resolvedKey = !memoKey ? JSON.stringify(arguments) : memoKey;

	return function () {
		// In case the memoization hasn't been done yet
		_hashDict[resolvedKey] =
			_hashDict[resolvedKey] || fn.apply(undefined, arguments);

		return _hashDict[resolvedKey];
	};
}

/**
 * Contract for the possible languages state object.
 */
interface i18nState {
	language: string;
}

/**
 * The possible languages state object. This is the default state.
 */
const i18n: i18nState = {
	language: "pt_br"
};

const memoizedLoadLangFile = memoize<LangFile>(
	(): LangFile => {
		_loadedFile = require(`./lang/${i18n.language}.js`) ?? {
			dictionary: {}
		};

		return _loadedFile;
	},
	// async (): Promise<LangFile> => {
	// 	_loadedFile = await import(`./lang/${i18n.language}.js`);

	// 	return _loadedFile?.dictionary ?? {};
	// },
	i18n.language
);

/**
 * Finds the translation entry in the lang file and replaces the params.
 *
 * @param key The key of the translation entry.
 * @param params [Optional] The params to be replaced in the translation entry.
 * @returns The translated string.
 */
function findTranslationKey(key: string, params: any) {
	let resolvedTranslation: string;

	const langFile = memoizedLoadLangFile();

	if (!langFile) return key;

	const foundKey =
		Object.keys(langFile.dictionary).find(
			(translationKey) => translationKey === key
		) ?? null;

	if (!foundKey) return key;

	// Picks the translation entry from the lang file
	resolvedTranslation = langFile.dictionary[foundKey];

	if (params) {
		// Replaces the params in the translation entry
		Object.keys(params).forEach((paramKey) => {
			resolvedTranslation = resolvedTranslation.replace(
				`\$\{${paramKey}\}`,
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
	const translation = useMemo(() => translate(key, params), [key, params]);

	return translation;
}

/**
 * Custom hook for getting the whole translation dictionary.
 * @returns The translation dictionary.
 */
export function useTranslateMap() {
	const langFile = memoizedLoadLangFile();

	return langFile.dictionary;
}
