import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppState } from "hooks/useAppState";

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
	const st = useAppState();
	const authenticating = useSelector(Selectors.selectAuthenticating);
	const authenticated = useSelector(Selectors.selectAuthenticated);
	// const isAuthenticated = !!st && !authenticating && !!authenticated;

	if (!authenticating && !authenticated) {
		console.log("Not authenticated");
		st.auth.login(
			() => {
				st.auth.setAuthenticating(true);
				console.log("Authentication started");
			},
			() => {
				st.auth.setAuthenticated(true);
				st.auth.setAuthenticating(false);
				console.log("Authentication completed");
			}
		);
	}

	return authenticated ? children : <>401 User not authenticated</>;
}

export { AppAuthentication, IAppAuthenticationProps };
