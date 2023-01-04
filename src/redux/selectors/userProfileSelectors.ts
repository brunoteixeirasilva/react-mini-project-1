// TODO: Create data selectors

import { RootState } from "redux/store";
import { UserProfile } from "models";

// 1. Define your interfaces, that helps know your data and create better data flows / processes

/**
 * Contract for definining the structure of selectors
 * allowed in the UserProfile Slice of the application state tree.
 */
interface ISelectors {
	selectUserProfile: (state: RootState) => UserProfile;
	selectUserProfileName: (state: RootState) => string;
	selectUserProfileNameWithAnon: (state: RootState) => string;
	selectUserProfileId: (state: RootState) => string;
}

// 2. Define the functionalities that implement necessary logic to achieve contract definitions

/**
 * Selects the UserProfile from the app state tree.
 *
 * @param state The application root state, as per definition
 */
function selectUserProfile(state: RootState): UserProfile {
	return state.userProfile;
}

/**
 * Selects the UserProfile Name from the app state tree.
 *
 * @param state The application root state, as per definition
 */
function selectUserProfileName(state: RootState): string {
	return state.userProfile.name;
}

/**
 * Selects the UserProfile Name from the app state tree, returns an "Anon" if no user is authenticated.
 *
 * @param state The application root state, as per definition
 */
function selectUserProfileNameWithAnon(state: RootState): string {
	return state.userProfile.name ?? "Anon";
}

/**
 * Selects the UserProfile ID from the app state tree.
 *
 * @param state The application root state, as per definition
 */
function selectUserProfileId(state: RootState): string {
	return state.userProfile.id;
}

// 3. Create the object which groups the selectors usable for picking data from UserProfile slice.

/**
 * Selector group for UserProfile slice of the app.
 */
const Selectors: ISelectors = {
	selectUserProfile,
	selectUserProfileName,
	selectUserProfileNameWithAnon,
	selectUserProfileId
};

export { Selectors };
