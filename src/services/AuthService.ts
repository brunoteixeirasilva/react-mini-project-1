import { appStateService } from "App";
import { setAuthenticated, setAuthenticating } from "redux/reducers";
import { Selectors } from "redux/selectors/userProfileSelectors";

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

	async login(onLoading: () => void, onLoaded: () => void) {
		// Only authenticated once, since there are control flags now
		// If the process is loading (started), won't enter the if.
		// Or if the process is loaded (concluded), won't enter the if.
		// Or if the authentication was initialized, won't enter the if.

		if (Selectors.selectAuthenticating(this._store.getState())) {
			debugger;
		}

		if (typeof onLoading === "function") onLoading();

		appStateService.user.setId(_lorenzo.id);
		appStateService.user.setName(_lorenzo.name);
		appStateService.user.setEmail(_lorenzo.email);
		appStateService.user.setIsAdmin(_lorenzo.isAdmin);

		debugger;

		if (typeof onLoaded === "function") onLoaded();
	}

	async setAuthenticating(authenticating: boolean) {
		await this._store.dispatch(setAuthenticating(authenticating));
	}

	async setAuthenticated(authenticated: boolean) {
		await this._store.dispatch(setAuthenticated(authenticated));
	}
}

export { AuthService };
