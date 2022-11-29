import React, { useContext, useEffect, useMemo } from "react";

// import { MiniContext, MiniContextConsumer } from "storage/context";
import { Routes } from "../router/Routes";

import { useStyles } from "./Header.styles";

import { useAppState } from "hooks/useAppState";

/**
 * Application Header component.
 * Uses a Title, Buttons, and profile data.
 */
function Header() {
    // const urlPath = document.location.pathname;
    const styles = useStyles();
    // const data = useContext(MiniContext);
    const appState = useAppState();
    const userProfileName = useMemo(
        () =>
            !appState.user || !appState.user.name ? "Anon" : appState.user.name,
        [appState.user]
    );

    return (
        <header style={styles.header}>
            <div style={styles.appTitle}>
                <a href={Routes.Home}>Practice React</a>
            </div>
            <nav style={styles.navButtons}>
                <span style={styles.navButtonUnit}>{userProfileName}</span>
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
