interface IUserProfile {
	name: string;
	mail: string;
	id: string;
	isAdmin: boolean;
}

/**
 * User profile factory class.
 */
export class UserProfile implements IUserProfile {
	name = null;
	mail = null;
	id = null;
	isAdmin = false;

	constructor() {
		this.name = "";
		this.mail = "";
		this.id = "";
		this.isAdmin = false;
	}
}

const userProfileInitialState: IUserProfile = new UserProfile();

export { userProfileInitialState };
