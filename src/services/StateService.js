const _storage = {
    user: {
        id: "",
        name: "Anon",
        email: "",
        isAdmin: false
    }
};

class StateService {
    user = {
        get: () => {
            return _storage.user;
        },
        set: function (user) {
            this.user.setId(user.id);
            this.user.setEmail(user.email);
            this.user.setName(user.name);
            this.user.setIsAdmin(user.isAdmin);
        },
        getName: () => {
            // Reading current state value
            return _storage.user.name;
        },
        setName: (newName) => {
            if (!newName) return;

            // Setting new state value
            _storage.user.name = newName;
        },
        getId: () => {
            return _storage.user.id;
        },
        setId: (id) => {
            _storage.user.id = id;
        },
        getEmail: () => {
            return _storage.user.email;
        },
        setEmail: (email) => {
            _storage.user.email = email;
        },
        getIsAdmin: () => {
            return _storage.user.isAdmin;
        },
        setIsAdmin: (isAdmin) => {
            _storage.user.isAdmin = isAdmin;
        }
    };
}

export { StateService };
