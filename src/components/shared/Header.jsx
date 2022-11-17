import React, { useContext, useEffect } from "react";

import { MiniContext } from "storage/context";
import { Routes } from "../router/Routes";

import { useStyles } from "./Header.styles";

/**
 * Application Header component.
 * Uses a Title, Buttons, and profile data.
 */
function Header() {
    // const urlPath = document.location.pathname;
    const styles = useStyles();
    const data = useContext(MiniContext);

    useEffect(() => {
        if (!data) debugger;

        debugger;
        if (data && data.profile.name === "") {
            data.setProfile({
                name: "Lorenzo",
                mail: "mail@any.com",
                id: "123"
            });
        }
    }, [data]);

    return (
        <header style={styles.header}>
            <div style={styles.appTitle}>
                <a href={Routes.Home}>Practice React</a>
            </div>
            <nav style={styles.navButtons}>
                {/* <MiniContext.Consumer>
                    {({ profile }) => {
                        return ( */}
                <span style={styles.navButtonUnit}>
                    {data.profile?.name ?? "Anonymous"}
                </span>
                {/* );
                    }}
                </MiniContext.Consumer> */}
                <span style={styles.navButtonUnit}>
                    <button
                        onClick={() => {
                            window.location.href = Routes.Login;
                        }}
                    >
                        Login
                    </button>
                </span>
                <span style={styles.navButtonUnit}>
                    <a href={Routes.Error404}>Error 404</a>
                </span>
            </nav>
        </header>
    );
}

export { Header };
