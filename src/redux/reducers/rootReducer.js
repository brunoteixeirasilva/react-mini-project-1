import userProfileReducer from "./userProfileReducer";

/**
 * Base structure of our Storage ecosystem.
 */
const RootReducer = {
    userProfile: userProfileReducer,
    someOtherReducer: null
};

export { RootReducer };
