import React, { useEffect } from "react";
import { AppRouter } from "components/router/AppRouter";
import { Header } from "components/shared/Header";
import { useAppState } from "hooks/useAppState";
// import { StateService } from "services/StateService";
// import { MiniContext } from "storage/context/index";

import "./AppLayout.css";

/**
 * Default data-set
 */
const _lorenzo = {
    id: "123",
    name: "Lorenzo",
    email: "mail@any.com",
    isAdmin: true
};

export function AppLayout() {
    const urlPath = document.location.pathname;
    const store = useAppState();

    // Setting a "fake" user session to the state layer
    useEffect(() => {
        setTimeout(() => {
            if (
                store &&
                store.user.getId() === "" &&
                store.user.getEmail() === ""
            ) {
                store.user.set(_lorenzo);
                // store.user.setName(_lorenzo.name);
                // store.user.setEmail(_lorenzo.email);
                // store.user.setIsAdmin(_lorenzo.isAdmin);
            }
        }, 2000);
    }, [store]);

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
