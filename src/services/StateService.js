import { AuthService } from "./AuthService";
import { UserService } from "./UserService";

/**
 * Class for managing the access to a State Layer in the app.
 */
class StateService {
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
