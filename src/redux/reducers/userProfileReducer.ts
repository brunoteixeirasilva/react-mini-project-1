import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userProfileInitialState as initialState } from "models/UserProfile";

const _sliceName = "userProfile";

export const userProfileSlice = createSlice({
	name: _sliceName,
	initialState,
	reducers: {
		setName(state, action: PayloadAction<string>) {
			// Setting new state value
			state.name = action.payload;
		},
		setId(state, action: PayloadAction<string>) {
			state.id = action.payload;
		},
		setEmail(state, action: PayloadAction<string>) {
			state.mail = action.payload;
		},
		setIsAdmin(state, action: PayloadAction<boolean>) {
			state.isAdmin = action.payload;
		},
		setAuthenticating(state, action: PayloadAction<boolean>): void {
			state.authenticating = action.payload;
		},
		setAuthenticated(state, action: PayloadAction<boolean>): void {
			state.authenticated = action.payload;
			state.authenticating = false;
		}
	}
});

export const { reducer, actions } = userProfileSlice;

export default reducer;

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
