import React from "react";

// import { ContextData, MiniContextProvider } from "storage/context";
import { AppLayout } from "./AppLayout";

// Mode: No ContextAPI below
function App() {
    return <AppLayout />;
}

// Mode: Using the ContextAPI below
// function App() {
//     return <MiniContextProvider value={ContextData}>
//          <AppLayout />
//      </MiniContextProvider>;
// }

export default App;
