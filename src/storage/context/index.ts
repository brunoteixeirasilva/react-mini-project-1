import React from "react";
import { UserProfile } from "models/UserProfile";

const ContextData = {
    profile: new UserProfile(),
    setProfile: async function ({ name, mail, id } = new UserProfile()) {
        this.profile.id = id;
        this.profile.name = name;
        this.profile.mail = mail;
    },
    setProfileName: async function (name = "") {
        this.profile.name = name;
    },
    selectProfileName: async function () {
        return this.profile.name;
    }
};

const MiniContext = React.createContext(ContextData);

MiniContext.displayName = "MiniContext";

const MiniContextProvider = MiniContext.Provider;
const MiniContextConsumer = MiniContext.Consumer;

export { ContextData, MiniContext, MiniContextProvider, MiniContextConsumer };
