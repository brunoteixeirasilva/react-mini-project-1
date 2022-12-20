import React from "react";
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
	const id = useSelector(Selectors.selectUserProfileId);
	const name = useSelector(Selectors.selectUserProfileName);
	const isAuthenticated = st && !!id && !!name;

	if (!isAuthenticated) {
		debugger;
		st.auth.login(
			st.isLoading,
			st.isLoaded,
			() => {
				st.setIsLoading(true);
			},
			() => {
				st.setIsLoaded(true);
				st.setIsLoading(false);
			}
		);
	}

	return isAuthenticated ? (
		React.cloneElement(children, otherProps)
	) : (
		<>401 User not authenticated</>
	);
}

export { AppAuthentication, IAppAuthenticationProps };
