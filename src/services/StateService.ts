import { RootState } from "redux/store";
import { AuthService } from "./AuthService";
import { IBoredAPIService, BoredAPIService } from "./BoredAPIService";
import { UserService } from "./UserService";

interface IStateServices {
	_store: RootState;
	auth: AuthService;
	user: UserService;
	boredAPI: IBoredAPIService;
}

/**
 * Class for managing the access to a State Layer in the app.
 */
class StateService implements IStateServices {
	_store: RootState;
	auth: AuthService;
	user: UserService;
	boredAPI: IBoredAPIService;

	constructor(reduxStore) {
		this._store = reduxStore;
		this.auth = new AuthService(reduxStore);
		this.user = new UserService(reduxStore);
		this.boredAPI = new BoredAPIService();
	}
}

export { StateService };
