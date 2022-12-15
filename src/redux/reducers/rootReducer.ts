import userProfileReducer from "./userProfileReducer";
import { UserProfile } from "models";

/**
 * Base structure of our Storage ecosystem.
 */
const RootReducer = {
	userProfile: userProfileReducer
};

export { RootReducer };
