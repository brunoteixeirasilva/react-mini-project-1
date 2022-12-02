import React from "react";
import store from "redux/store";
import { Provider } from "react-redux";

import { AppLayout } from "./AppLayout";

// Mode: Using Redux
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

export { store };

export default App;
