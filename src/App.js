import React from "react";
import store from "redux/store";
import { Provider } from "react-redux";
import { StateService } from "services/StateService";

const appState = new StateService(store);

const AppLayout = require("./AppLayout").AppLayout;

/**
 * Application main (entry) point.
 * Mode: Using Redux
 */
function App() {
    return (
        <Provider store={store}>
            <AppLayout />
        </Provider>
    );
}

// Mode: Using the ContextAPI below
// function App() {
//     return <MiniContextProvider value={ContextData}>
//          <AppLayout />
//      </MiniContextProvider>;
// }

export { store, appState };

export default App;
