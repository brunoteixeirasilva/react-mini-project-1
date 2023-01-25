import { appStateService, StoreType } from "App";
import { actions } from "redux/reducers/userProfileReducer";
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
	_store: StoreType = null;

	constructor(reduxStore: StoreType) {
		this._store = reduxStore;
	}

	login(onLoading: () => Promise<void>, onLoaded: () => Promise<void>) {
		// Only authenticated once, since there are control flags now
		// If the process is loading (started), won't enter the if.
		// Or if the process is loaded (concluded), won't enter the if.
		// Or if the authentication was initialized, won't enter the if.

		if (Selectors.selectAuthenticating(this._store.getState())) {
			debugger;
		}

		if (typeof onLoading === "function") Promise.resolve(onLoading());

		// not async
		appStateService.user.setId(_lorenzo.id);

		// not async
		appStateService.user.setName(_lorenzo.name);

		// not async
		appStateService.user.setEmail(_lorenzo.email);

		// not async
		appStateService.user.setIsAdmin(_lorenzo.isAdmin);

		if (typeof onLoaded === "function") Promise.resolve(onLoaded());
	}

	setAuthenticating(authenticating: boolean) {
		this._store.dispatch(actions.setAuthenticating(authenticating));
	}

	setAuthenticated(authenticated: boolean) {
		this._store.dispatch(actions.setAuthenticated(authenticated));
	}
}

export { AuthService };
