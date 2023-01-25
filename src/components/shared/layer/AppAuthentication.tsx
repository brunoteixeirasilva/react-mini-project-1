import React from "react";
import { useSelector } from "react-redux";
import { appStateService } from "App";
import { Selectors } from "redux/selectors/userProfileSelectors";

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

	if (!authenticating && !authenticated) {
		console.log("Not authenticated");
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

	return authenticated ? children : <>401 User not authenticated</>;
}

export { AppAuthentication, IAppAuthenticationProps };
