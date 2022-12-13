import React from "react";
import { useSelector } from "react-redux";
import { useAppState } from "hooks/useAppState";

/**
 * Application authentication layer, which abstracts
 * the necessary operations of the authentication ecosystem.
 */
function AppAuthentication({ children, ...otherProps }) {
    const st = useAppState();
    // const id = st.user.getId() ?? "";
    // const name = st.user.getName() ?? "";
    const id = useSelector((state) => state.userProfile.id);
    const name = useSelector((state) => state.userProfile.name);
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

    return isAuthenticated
        ? React.cloneElement(children, otherProps)
        : "401 User not authenticated";
}

export { AppAuthentication };
