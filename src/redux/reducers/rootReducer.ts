import userProfileReducer from "./userProfileReducer";
import { UserProfile } from "models";
import { combineReducers } from "@reduxjs/toolkit";

// TODO: Implement the "skeleton"
// /**
//  * Contract for the Application State tree.
//  */
interface IRootState {
	userProfile: UserProfile;
	// someOtherReducer: any;
}

/**
 * Base structure of our Storage ecosystem.
 */
const RootReducer = combineReducers<IRootState>({
	userProfile: userProfileReducer
});

/**
 * Store RootState type definition
 */
export type RootState = ReturnType<typeof RootReducer>;

export { RootReducer };
