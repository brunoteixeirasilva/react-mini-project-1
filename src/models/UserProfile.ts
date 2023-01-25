interface IUserProfile {
	name: string;
	mail: string;
	id: string;
	isAdmin: boolean;
	authenticating: boolean;
	authenticated: boolean;
}

// /**
//  * Base class for the state definition to be extractable from classes which extend it.
//  */
// export class InitialStateDefinition<T> {
// 	constructor() {}

// 	toInitialState(): T {
// 		return { ...this };
// 	}
// }

/**
 * User profile factory class.
 */
export class UserProfile implements IUserProfile {
	name: string = "";
	mail: string = "";
	id: string = "";
	isAdmin: boolean = false;
	authenticating: boolean = false;
	authenticated: boolean = false;

	constructor(data?: undefined | any) {
		this.name = data?.name ?? "";
		this.mail = data?.mail ?? "";
		this.id = data?.id ?? "";
		this.isAdmin = data?.isAdmin ?? false;
		this.authenticating = data?.authenticating ?? false;
		this.authenticated = data?.authenticated ?? false;
	}
}

const userProfileInitialState: IUserProfile = { ...new UserProfile() };

export { IUserProfile, userProfileInitialState };
