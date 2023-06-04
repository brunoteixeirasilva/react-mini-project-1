import React from "react";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

import { appStateService } from "App";
import { Selectors } from "redux/selectors/userProfileSelectors";
import { Routes } from "components/router/Routes";

/**
 * Contract for the properties provided to the AppAuthentication component.
 */
interface IAppAuthenticationProps {
	children: JSX.Element;
}

/**
 * Application authentication layer, which abstracts
 * the necessary operations of the authentication ecosystem.
 */
function AppAuthentication({
	children,
	...otherProps
}: IAppAuthenticationProps): JSX.Element {
	const st = appStateService;
	const authenticating = useSelector(Selectors.selectAuthenticating);
	const authenticated = useSelector(Selectors.selectAuthenticated);
	// const isAuthenticated = !!st && !authenticating && !!authenticated;
	// const history = createBrowserHistory();

	if (!authenticating && !authenticated) {
		console.log("Not authenticated");

		// TODO: Fix this redirect
		redirect(Routes.Login);

		st.auth.login(
			async () => {
				console.log("Authentication started");
				st.auth.setAuthenticating(true);
			},
			async () => {
				console.log("Authentication completed");
				st.auth.setAuthenticated(true);
			}
		);
	}

	return <>{children}</>;
}

export { AppAuthentication, IAppAuthenticationProps };
