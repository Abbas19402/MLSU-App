import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'Authentication',
    initialState: {
        user: null,
        loginStatus: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.loginStatus = true
        },
        logout: (state, action) => {
            state.user = null
            state.loginStatus = false
        }
    }
})

export const { login , logout } = AuthSlice.actions
const authReducer = AuthSlice.reducer
export default authReducer