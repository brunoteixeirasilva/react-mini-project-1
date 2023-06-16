import { StoreType } from "App";
import { IAppManagerService } from "interfaces/IAppManagerService";
import { RootState } from "redux/store";

import { AuthService } from "./AuthService";
// import { IBoredAPIService, BoredAPIService } from "./BoredAPIService";
import { UserService } from "./UserService";
import { PizzaService } from "./PizzaService";
import { AppManagerService } from "./AppManagerService";
import { ZapierService } from "./ZapierService";

/**
 * Contract for the Application's Service and State management layer.
 */
interface IStateServices {
	_store: StoreType;
	appManager: IAppManagerService;
	auth: AuthService;
	Pizza: PizzaService;
	user: UserService;
	zapier: ZapierService;
	// boredAPI: IBoredAPIService;
}

/**
 * Class for managing the access to a State Layer in the app.
 */
class StateService implements IStateServices {
	_store: StoreType;
	appManager: IAppManagerService;
	auth: AuthService;
	Pizza: PizzaService;
	user: UserService;
	zapier: ZapierService;
	// boredAPI: IBoredAPIService;

	constructor(reduxStore: StoreType) {
		this._store = reduxStore;
		this.appManager = new AppManagerService();
		this.auth = new AuthService(reduxStore);
		this.Pizza = new PizzaService();
		this.user = new UserService(reduxStore);
		this.zapier = new ZapierService();
		// this.boredAPI = new BoredAPIService();
	}
}

export { StateService };
