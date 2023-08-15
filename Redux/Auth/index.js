import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'Authentication',
    initialState: {
        student: null,
        faculty: null,
        loginStatus: false
    },
    reducers: {
        loginStudent: (state, action) => {
            state.student = action.payload;
            state.loginStatus = true
        },
        loginFaculty: (state, action) => {
            state.faculty = action.payload;
            state.loginStatus = true
        },
        logout: (state) => {
            state.student = null
            state.faculty = null
            state.loginStatus = false
        }
    }
})

export const { loginStudent, loginFaculty, logout } = AuthSlice.actions
const authReducer = AuthSlice.reducer
export default authReducer