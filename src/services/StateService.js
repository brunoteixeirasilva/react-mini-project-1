const _storage = {
    user: {
        name: "Anon"
    }
};

class StateService {
    User = {
        getName: () => {
            // Reading current state value
            return _storage.user.name;
        },
        setName: (newName) => {
            if (!newName) return;

            // Setting new state value
            _storage.user.name = newName;
        }
    };
}

export { StateService };
