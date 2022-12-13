import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./reducers/rootReducer";

/**
 * Store. Configured based on the set of reducers specified in RootReducer.
 */
const store = configureStore({ reducer: RootReducer, devTools: true });

export default store;
