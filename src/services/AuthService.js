import { appState } from "App";

/**
 * Default data-set
 */
const _lorenzo = {
    id: "123",
    name: "Lorenzo",
    email: "mail@any.com",
    isAdmin: true
};

class AuthService {
    _store = null;

    constructor(reduxStore) {
        this._store = reduxStore;
    }

    async login(
        isLoading,
        isLoaded,
        onLoading = Function,
        onLoaded = Function
    ) {
        // Only authenticated once, since there are control flags now
        // If the process is loading (started), won't enter the if.
        // Or if the process is loaded (concluded), won't enter the if.
        // Or if the authentication was initialized, won't enter the if.
        if (!isLoading && !isLoaded) {
            if (typeof onLoading === "function") onLoading();

            appState.user.setId(_lorenzo.id);
            appState.user.setName(_lorenzo.name);
            appState.user.setEmail(_lorenzo.email);
            appState.user.setIsAdmin(_lorenzo.isAdmin);

            if (typeof onLoaded === "function") onLoaded();
        }
    }
}

export { AuthService };
