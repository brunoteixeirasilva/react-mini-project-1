import { StoreType } from "App";
import { IAppManagerService } from "interfaces/IAppManagerService";
import { RootState } from "redux/store";
import { AuthService } from "./AuthService";
import { IBoredAPIService, BoredAPIService } from "./BoredAPIService";
import { UserService } from "./UserService";
import { AppManagerService } from "./AppManagerService";

/**
 * Contract for the Application's Service and State management layer.
 */
interface IStateServices {
	_store: StoreType;
	appManager: IAppManagerService;
	auth: AuthService;
	user: UserService;
	boredAPI: IBoredAPIService;
}

/**
 * Class for managing the access to a State Layer in the app.
 */
class StateService implements IStateServices {
	_store: StoreType;
	appManager: IAppManagerService;
	auth: AuthService;
	user: UserService;
	boredAPI: IBoredAPIService;

	constructor(reduxStore: StoreType) {
		this._store = reduxStore;
		this.appManager = new AppManagerService();
		this.auth = new AuthService(reduxStore);
		this.user = new UserService(reduxStore);
		this.boredAPI = new BoredAPIService();
	}
}

export { StateService };
