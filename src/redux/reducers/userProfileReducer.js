import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "models/UserProfile";

const _sliceName = "userProfile";

export const userProfileSlice = createSlice({
    name: _sliceName,
    initialState: new UserProfile(),
    reducers: {
        // set: function (state, action) {
        //     // this.user.setId(user.id);
        //     // this.user.setEmail(user.email);
        //     // this.user.setName(user.name);
        //     // this.user.setIsAdmin(user.isAdmin);
        // },

        // [DONE] name = "";
        setName: (state, action) => {
            // console.log(action)
            // action = {
            //    type: string,
            //    payload: string
            // }

            // Setting new state value
            state.name = action.payload;
            // Similar to old => _storage.user.name = name;
        },

        // [DONE] id = "";
        setId: (state, action) => {
            // console.log(action)
            // action = {
            //    type: string,
            //    payload: string
            // }
            state.id = action.payload;
            // Similar to old => _storage.user.id = id;
        },

        // [DONE] mail = "";
        setEmail: (state, action) => {
            // console.log(action)
            // action = {
            //    type: string,
            //    payload: string
            // }
            state.mail = action.payload;
            // Similar to old => _storage.user.email = email;
        },

        // [DONE] isAdmin = false;
        setIsAdmin: (state, action) => {
            // console.log(action)
            // action = {
            //    type: string,
            //    payload: boolean
            // }
            state.isAdmin = action.payload;
            //_storage.user.isAdmin = isAdmin;
        }
    }
});

export const { actions, reducer } = userProfileSlice;

export const { setName, setId, setEmail, setIsAdmin } =
    userProfileSlice.actions;

export default reducer;

// setName("Meandro");

// TODO: Selectors

// get: () => {
//     return _storage.user;
// },
// getName: () => {
//     // Reading current state value
//     return _storage.user.name;
// },
// getId: () => {
//     return _storage.user.id;
// },
// getEmail: () => {
//     return _storage.user.email;
// },
// getIsAdmin: () => {
//     return _storage.user.isAdmin;
// },
