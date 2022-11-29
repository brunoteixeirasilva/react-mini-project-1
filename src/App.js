import React from "react";

import { ContextData, MiniContextProvider } from "storage/context";
import { AppLayout } from "./AppLayout";

function App() {
    return (
        <MiniContextProvider value={ContextData}>
            <AppLayout />
        </MiniContextProvider>
    );
}

export default App;
