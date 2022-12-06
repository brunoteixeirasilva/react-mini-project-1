import { UserService } from "./UserService";

/**
 * Class for managing the access to a State Layer in the app.
 */
class StateService {
    _store = null;
    user = null;

    constructor(reduxStore) {
        this._store = reduxStore;
        this.user = new UserService(this._store);
    }
}

export { StateService };
