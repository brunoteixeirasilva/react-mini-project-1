import {
	setName,
	setId,
	setEmail,
	setIsAdmin
} from "redux/reducers/userProfileReducer";

/**
 * Class for managing the User data in the State Layer of the app.
 */
class UserService {
	_store = null;

	constructor(reduxStore) {
		this._store = reduxStore;
	}

	// get (){
	//     // return store.dispatch(.user;
	// }
	// set (user) {
	//     this.user.setId(user.id);
	//     this.user.setEmail(user.email);
	//     this.user.setName(user.name);
	//     this.user.setIsAdmin(user.isAdmin);
	// }
	getName() {
		if (!this._store) return;

		// Reading current state value
		return this._store.getState().userProfile.name;
	}
	async setName(newName: string) {
		if (!this._store || !newName) return;

		// Setting new state value
		this._store.dispatch(setName(newName));
	}
	getId() {
		if (!this._store) return;

		// debugger;
		return this._store.getState().userProfile.id;
	}
	async setId(id: string) {
		if (!this._store) return;

		this._store.dispatch(setId(id));
	}
	getEmail() {
		if (!this._store) return;

		return this._store.getState().userProfile.mail;
	}
	async setEmail(email: string) {
		if (!this._store) return;

		this._store.dispatch(setEmail(email));
	}
	getIsAdmin() {
		if (!this._store) return;

		return this._store.getState().userProfile.isAdmin;
	}
	async setIsAdmin(isAdmin: boolean) {
		if (!this._store) return;

		this._store.dispatch(setIsAdmin(isAdmin));
	}
}

export { UserService };
