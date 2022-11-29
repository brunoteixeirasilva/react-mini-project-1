import React, { useContext, useEffect } from "react";
import { AppRouter } from "components/router/AppRouter";
import { Header } from "components/shared/Header";
import { MiniContext } from "storage/context/index";

import "./AppLayout.css";

/**
 * Default data-set
 */
const _lorenzo = {
    name: "Lorenzo",
    mail: "mail@any.com",
    id: "123"
};

export function AppLayout() {
    const urlPath = document.location.pathname;
    const data = useContext(MiniContext);

    // Setting a "fake" user session to the state layer
    useEffect(() => {
        if (
            data &&
            data.profile.name === "" &&
            data.profile.mail === "" &&
            data.profile.id === ""
        ) {
            debugger;
            data.setProfile(_lorenzo);
        }
    }, [data]);

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
