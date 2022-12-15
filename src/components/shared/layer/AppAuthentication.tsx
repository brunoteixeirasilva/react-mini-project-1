import React from "react";
import { useSelector } from "react-redux";
import { useAppState } from "hooks/useAppState";
import { RootState } from "redux/store";

import { Selectors } from "redux/selectors/userProfileSelectors";

/**
 * Application authentication layer, which abstracts
 * the necessary operations of the authentication ecosystem.
 */
function AppAuthentication({ children, ...otherProps }): JSX.Element {
	const st = useAppState();
	const id = useSelector(Selectors.selectUserProfileId);
	const name = useSelector(Selectors.selectUserProfileName);
	const isAuthenticated = st && !!id && !!name;

	if (!isAuthenticated) {
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

export { AppAuthentication };
