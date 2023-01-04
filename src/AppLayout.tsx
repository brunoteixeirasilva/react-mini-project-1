import React from "react";
import { AppRouter } from "components/router/AppRouter";
import { Header } from "components/shared/Header";
// import { StateService } from "services/StateService";
// import { MiniContext } from "storage/context/index";

import "./AppLayout.css";

/**
 * Renders the basic structure of the React application,
 * Notice the className defines layout major styles, from imported AppLayout.css.
 */
export function AppLayout() {
    const urlPath = document.location.pathname;

    return (
        <div className="App">
            {/* Begin: Menu - Fixed part of the app */}
            <Header />
            {/* End: Menu - Fixed part of the app */}
            {/* Begin: Moving part of the app */}
            <AppRouter routePath={urlPath} />
            {/* End: Moving part of the app */}
        </div>
    );
}
