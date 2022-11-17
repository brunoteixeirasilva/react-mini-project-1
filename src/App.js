import React, { Context } from "react";

import { MiniContext } from "./storage/context";
import { AppRouter } from "./components/router/AppRouter";
import { Header } from "./components/shared/Header";

import "./App.css";

function App() {
    const urlPath = document.location.pathname;

    return (
        <MiniContext.Provider value={MiniContext.profile}>
            <div className="App">
                {/* Begin: Menu - Fixed part of the app */}
                <Header />
                {/* End: Menu - Fixed part of the app */}
                {/* Begin: Moving part of the app */}
                <AppRouter routePath={urlPath} />
                {/* End: Moving part of the app */}
            </div>
        </MiniContext.Provider>
    );
}

export default App;
