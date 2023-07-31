import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: 'header',
    initialState: {
        isInStack: false,
        isInTabs: true
    },
    reducers: {
        SWITCH_TO_CHILDSTACK: (state) => {
            state.isInStack = true
            state.isInTabs = false
        },
        SWITCH_TO_TABS: (state) => {
            state.isInStack = false
            state.isInTabs = true
        }
    }
})

export const { SWITCH_TO_CHILDSTACK, SWITCH_TO_TABS } = HeaderSlice.actions;
const HeaderReducer = HeaderSlice.reducer
export default HeaderReducer