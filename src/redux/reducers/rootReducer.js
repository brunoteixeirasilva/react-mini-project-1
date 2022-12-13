import userProfileReducer from "./userProfileReducer";

/**
 * Base structure of our Storage ecosystem.
 */
const RootReducer = {
    [userProfileReducer.name]: userProfileReducer,
    someOtherReducer: null
};

export default RootReducer;
