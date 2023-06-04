import React from "react";
import { Provider } from "react-redux";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AnyAction, CombinedState, ThunkMiddleware } from "@reduxjs/toolkit";

import store from "redux/store";
import { AppLayout } from "AppLayout";

import { StateService } from "services/StateService";
import { AppAuthentication } from "components/shared/layer/AppAuthentication";
import { IRootState } from "redux/reducers";

// Page Components
// import { Routes } from "components/router/Routes";
// import { HomePage } from "components/page/HomePage";
// import { LoginPage } from "components/page/LoginPage";
// import { Error404Page } from "components/page/Error404Page";

/**
 * Re-usable StoreType, for any services typing it.
 */
type StoreType = ToolkitStore<
	CombinedState<IRootState>,
	AnyAction,
	[ThunkMiddleware<CombinedState<IRootState>, AnyAction, undefined>]
>;

const appStateService = new StateService(store);

/**
 * Application main (entry) point.
 * Mode: Using Redux
 */
function App(): JSX.Element {
	return (
		<Provider store={store}>
			<AppLayout />
		</Provider>
	);
}

export { store, appStateService, StoreType };

export default App;
