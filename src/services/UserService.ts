import { StoreType } from "App";
import { actions } from "../redux/reducers/userProfileReducer";

/**
 * Class for managing the User data in the State Layer of the app.
 */
class UserService {
	_store: StoreType = null;

	constructor(reduxStore: StoreType) {
		this._store = reduxStore;
	}

	getName() {
		if (!this._store) return;

		// Reading current state value
		return this._store.getState().userProfile.name;
	}
	setName(newName: string) {
		if (!this._store || !newName) return;

		this._store.dispatch(actions.setName(newName));
	}
	getId() {
		if (!this._store) return;

		return this._store.getState().userProfile.id;
	}
	setId(id: string) {
		if (!this._store) return;

		this._store.dispatch(actions.setId(id));
	}
	getEmail() {
		if (!this._store) return;

		return this._store.getState().userProfile.mail;
	}
	setEmail(email: string) {
		if (!this._store) return;

		this._store.dispatch(actions.setEmail(email));
	}
	getIsAdmin() {
		if (!this._store) return;

		return this._store.getState().userProfile.isAdmin;
	}
	setIsAdmin(isAdmin: boolean) {
		if (!this._store) return;

		this._store.dispatch(actions.setIsAdmin(isAdmin));
	}
}

export { UserService };
