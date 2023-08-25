import React from "react";
import { useSelector } from "react-redux";

import { Selectors } from "redux/selectors/userProfileSelectors";
import { Routes } from "components/router/Routes";
import { useTranslate } from "hooks/i18n";

import { useStyles } from "./Header.styles";

import "./Header.scss";

// import { MiniContext, MiniContextConsumer } from "storage/context";
// import { useAppState } from "hooks/useAppState";

/**
 * Application Header component.
 * Uses a Title, Buttons, and profile data.
 */
function Header(): JSX.Element {
	// const urlPath = document.location.pathname;
	const styles = useStyles();
	const appTitle = useTranslate("app.bar.title");
	// const data = useContext(MiniContext);
	// const appStateService = useAppState();
	const isAuthenticated = useSelector(Selectors.selectAuthenticated);
	const userProfileName = useSelector(
		Selectors.selectUserProfileNameWithAnon
	);

	return isAuthenticated ? (
		<header className="Header">
			<div className="Header__appTitle">
				<a href={Routes.Home}>{appTitle}</a>
			</div>
			<nav className="Header__navButtons">
				<span className="Header__navButtonUnit">{userProfileName}</span>
				<span className="Header__navButtonUnit">
					{/* <button
						onClick={() => {
							window.location.href = Routes.Login;
						}}
					>
						Login
					</button> */}
				</span>
				{/* <span className="Header__navButtonUnit">
					<a href={Routes.Error404}>Error 404</a>
				</span> */}
			</nav>
		</header>
	) : null;
}

export { Header };
