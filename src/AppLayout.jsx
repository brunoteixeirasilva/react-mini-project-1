import React, { useEffect } from "react";
import { useSelector } from "react-redux";

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
    const state = useAppState();
    const data = useSelector((state) => ({
        id: state.userProfile.id,
        mail: state.userProfile.mail
    }));

    // Setting a "fake" user session to the state layer
    useEffect(() => {
        async function callService() {
            setTimeout(() => {
                const id = data.id;
                const mail = data.mail;

                if (
                    state &&
                    (undefined === id || id === "") &&
                    (undefined === mail || mail === "")
                ) {
                    state.user.setId(_lorenzo.id);
                    // state.user.setName(_lorenzo.name);
                    // state.user.setEmail(_lorenzo.email);
                    // state.user.setIsAdmin(_lorenzo.isAdmin);
                }
            }, 2000);
        }

        callService();
    }, [data, state]);

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
