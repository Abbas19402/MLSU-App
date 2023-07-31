import { createSlice } from "@reduxjs/toolkit";

const CollegeSlice = createSlice({
    name: 'college',
    initialState: {
        isCollegeSelected: false,
        data: null,
        authStage: {
            college: false,
            auth: false
        },
        user: null
    },
    reducers: {
        SET_COLLEGE: (state, action) => {
            state.isCollegeSelected = true,
            state.collegeData = action.payload
        },
        LOGIN: (state, action) => {
            state.authStage.auth = true
            state.user = action.payload
        },
        LOGOUT: (state, action) => {
            state.authStage.auth = false
            state.user = null
        }
    }
})

export const { SET_COLLEGE, LOGIN } = CollegeSlice.actions;
const collegeReducer = CollegeSlice.reducer
export default collegeReducer