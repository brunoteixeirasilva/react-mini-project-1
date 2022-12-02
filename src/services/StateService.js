import { store } from "App";
import {
    setName,
    setId,
    setEmail,
    setIsAdmin
} from "redux/reducers/userProfileReducer";

/**
 * Class for managing the access to a State Layer in the app.
 */
class StateService {
    _store = null;

    constructor() {
        this._store = store;
    }

    user = {
        // get: () => {
        //     // return store.dispatch(.user;
        // },
        // set: function (user) {
        //     this.user.setId(user.id);
        //     this.user.setEmail(user.email);
        //     this.user.setName(user.name);
        //     this.user.setIsAdmin(user.isAdmin);
        // },
        getName: function () {
            if (!this._store) return;

            // Reading current state value
            return this._store.getState().userProfile.name;
        },
        setName: function (newName) {
            if (!this._store || !newName) return;

            // Setting new state value
            this._store.dispatch(setName(newName));
        },
        getId: () => {
            if (!this._store) return;

            return this._store.getState().userProfile.id;
        },
        setId: (id) => {
            if (!this._store) return;

            this._store.dispatch(setId(id));

            debugger;
        },
        getEmail: () => {
            if (!this._store) return;

            return this._store.getState().userProfile.mail;
        },
        setEmail: (email) => {
            if (!this._store) return;

            this._store.dispatch(setEmail(email));
        },
        getIsAdmin: () => {
            if (!this._store) return;

            return this._store.getState().userProfile.isAdmin;
        },
        setIsAdmin: (isAdmin) => {
            if (!this._store) return;

            this._store.dispatch(setIsAdmin(isAdmin));
        }
    };
}

export { StateService };
