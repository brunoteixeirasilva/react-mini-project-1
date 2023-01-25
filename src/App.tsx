import React from "react";
import store from "redux/store";
import { Provider } from "react-redux";
import { StateService } from "services/StateService";
import { AppAuthentication } from "components/shared/layer/AppAuthentication";
import { AppLayout } from "AppLayout";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AnyAction, CombinedState, ThunkMiddleware } from "@reduxjs/toolkit";
import { IRootState } from "redux/reducers";

/**
 * Re-usable StoreType, for any services typing it.
 */
type StoreType = ToolkitStore<
	CombinedState<IRootState>,
	AnyAction,
	[ThunkMiddleware<CombinedState<IRootState>, AnyAction, undefined>]
>;

const appStateService = new StateService(store);

// const AppLayout = require("./AppLayout").AppLayout;

/**
 * Application main (entry) point.
 * Mode: Using Redux
 */
function App(): JSX.Element {
	return (
		<Provider store={store}>
			<AppAuthentication>
				<AppLayout />
			</AppAuthentication>
		</Provider>
	);
}

// Mode: Using the ContextAPI below
// function App() {
//     return <MiniContextProvider value={ContextData}>
//          <AppLayout />
//      </MiniContextProvider>;
// }

export { store, appStateService, StoreType };

export default App;
