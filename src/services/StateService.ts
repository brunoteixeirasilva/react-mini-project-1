import { StoreType } from "App";
import { IAppManagerService } from "interfaces/IAppManagerService";
// import { RootState } from "redux/store";

import { AuthService } from "./AuthService";
import { UserService } from "./UserService";
import { AppManagerService } from "./AppManagerService";
import { FirebaseService } from "./firebase/FirebaseService";

/**
 * Contract for the Application's Service and State management layer.
 */
interface IStateServices {
	_store: StoreType;
	appManager: IAppManagerService;
	auth: AuthService;
	user: UserService;
	firebase: FirebaseService;
}

/**
 * Class for managing the access to a State Layer in the app.
 */
class StateService implements IStateServices {
	_store: StoreType;
	appManager: IAppManagerService;
	auth: AuthService;
	firebase: FirebaseService;
	user: UserService;

	constructor(reduxStore: StoreType) {
		// Singleton services
		this._store = reduxStore;
		this.firebase = new FirebaseService();

		// Transient services
		this.appManager = new AppManagerService();
		this.auth = new AuthService(reduxStore);
		this.user = new UserService(reduxStore);

		// Scoped services
	}
}

export { StateService };
