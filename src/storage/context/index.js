import React from "react";

const dataStructure = {
    profile: {
        name: "",
        mail: "",
        id: ""
    },
    setProfile: function ({ name, mail, id }) {
        debugger;
        this.profile.id = id;
        this.profile.name = name;
        this.profile.mail = mail;
    }
};

const MiniContext = React.createContext(dataStructure);

MiniContext.displayName = "MiniContext";

export { MiniContext };
