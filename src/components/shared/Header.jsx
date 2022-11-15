import React from "react";
import { Routes } from "../router/Routes";

import { useStyles } from "./Header.styles";

function Header() {
    // const urlPath = document.location.pathname;
    const styles = useStyles();

    return (
        <header style={styles.header}>
            <div style={styles.appTitle}>
                <a href={Routes.Home}>Practice React</a>
            </div>
            <nav style={styles.navButtons}>
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
