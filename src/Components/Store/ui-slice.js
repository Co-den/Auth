import { createSlice } from '@reduxjs/toolkit';


const initialAuthState = {
    isAuthenticated: false
}

const AuthSlice = createSlice({
    name: 'authenticated',
    initialState: initialAuthState,
    reducers: {
        logOut(state) {
            state.isAuthenticated = false;
        },
        logIn(state) {
            state.isAuthenticated = true;
        }
    }
});

export const authActions = AuthSlice.actions;
export default AuthSlice;