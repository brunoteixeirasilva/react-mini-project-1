import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./reducers";

import userProfileReducer from "./reducers/userProfileReducer";

const store = configureStore({
    // reducer: RootReducer
    reducer: {
        [userProfileReducer.name]: userProfileReducer
    }
});

export default store;
