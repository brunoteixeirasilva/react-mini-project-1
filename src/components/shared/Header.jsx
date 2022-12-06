import React from "react";
import { useSelector } from "react-redux";

// import { MiniContext, MiniContextConsumer } from "storage/context";
import { Routes } from "../router/Routes";

import { useStyles } from "./Header.styles";

// import { useAppState } from "hooks/useAppState";

/**
 * Application Header component.
 * Uses a Title, Buttons, and profile data.
 */
function Header() {
    // const urlPath = document.location.pathname;
    const styles = useStyles();
    // const data = useContext(MiniContext);
    // const appState = useAppState();
    const userProfileName = useSelector((state) => {
        return state?.userProfile?.name ?? "Anon";
    });

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
