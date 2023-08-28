import "firebase/auth";

// import { StateService } from "./StateService";
import { appStateService, StoreType } from "App";
import { actions } from "redux/reducers/userProfileReducer";
import { Selectors } from "redux/selectors/userProfileSelectors";

/**
 * Default data-set
 */
const _mockUser = {
	id: "123",
	name: "Bruno",
	email: "bruno@gmail.com",
	isAdmin: true
};

class AuthService {
	_store: StoreType = null;

	constructor(reduxStore: StoreType) {
		this._store = reduxStore;
	}

	async authenticate(user: string, pwd: string): Promise<boolean> {
		// firebase authentication using appStateService.firebase.auth
		// appStateService.firebase.app
		// 	.auth()
		// 	.signInWithEmailAndPassword(user, pwd);

		return true;
	}

	login(onLoading: () => Promise<void>, onLoaded: () => Promise<void>): void {
		// Only authenticated once, since there are control flags now
		// If the process is loading (started), won't enter the if.
		// Or if the process is loaded (concluded), won't enter the if.
		// Or if the authentication was initialized, won't enter the if.

		if (Selectors.selectAuthenticating(this._store.getState())) {
			debugger;
		}

		if (typeof onLoading === "function") Promise.resolve(onLoading());

		// not async
		appStateService.user.setId(_mockUser.id);

		// not async
		appStateService.user.setName(_mockUser.name);

		// not async
		appStateService.user.setEmail(_mockUser.email);

		// not async
		appStateService.user.setIsAdmin(_mockUser.isAdmin);

		if (typeof onLoaded === "function") Promise.resolve(onLoaded());
	}

	setAuthenticating(authenticating: boolean): void {
		this._store.dispatch(actions.setAuthenticating(authenticating));
	}

	setAuthenticated(authenticated: boolean): void {
		this._store.dispatch(actions.setAuthenticated(authenticated));
	}
}

export { AuthService };
