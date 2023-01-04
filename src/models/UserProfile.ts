interface IUserProfile {
	name: string;
	mail: string;
	id: string;
	isAdmin: boolean;
	authenticating: boolean;
	authenticated: boolean;
}

/**
 * User profile factory class.
 */
export class UserProfile implements IUserProfile {
	name: string;
	mail: string;
	id: string;
	isAdmin: boolean;
	authenticating: boolean;
	authenticated: boolean;

	constructor() {
		this.name = null;
		this.mail = null;
		this.id = null;
		this.isAdmin = false;
		this.authenticating = false;
		this.authenticated = false;
	}
}

const userProfileInitialState: IUserProfile = new UserProfile();

export { userProfileInitialState };
