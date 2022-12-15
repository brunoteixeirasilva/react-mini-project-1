import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./reducers/rootReducer";

// /**
//  * Contract for the Application State tree.
//  */
// interface IRootState {
// 	userProfile: UserProfile;
// 	// someOtherReducer: any;
// }

/**
 * Store. Configured based on the set of reducers specified in RootReducer.
 */
const store = configureStore({ reducer: RootReducer, devTools: true });

/**
 * Store RootState type definition
 */
export type RootState = ReturnType<typeof store.getState>;

export default store;
