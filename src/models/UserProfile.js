/**
 * User profile factory class.
 */
export class UserProfile {
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

const userProfileInitialState = new UserProfile();

export { userProfileInitialState };
