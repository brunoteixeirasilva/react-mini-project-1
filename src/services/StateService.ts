import { RootState } from "redux/store";
import { AuthService } from "./AuthService";
import { UserService } from "./UserService";

interface IStateServices {
	auth: AuthService;
	user: UserService;
	_store: RootState;
}

/**
 * Class for managing the access to a State Layer in the app.
 */
class StateService implements IStateServices {
	_store = null;
	auth = null;
	user = null;

	constructor(reduxStore) {
		this._store = reduxStore;
		this.auth = new AuthService(reduxStore);
		this.user = new UserService(reduxStore);
	}
}

export { StateService };
