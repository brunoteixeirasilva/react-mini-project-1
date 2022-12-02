import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./reducers";

const store = configureStore({
    reducer: RootReducer
});

export default store;
