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
            console.log('Stack','Child Header: ', state.isInChild,'Tabs Header: ', state.isInTabs);
        },
        SWITCH_TO_TABS: (state) => {
            state.isInStack = false
            state.isInTabs = true
            console.log('Tabs','Child Header: ', state.isInChild,'Tabs Header: ', state.isInTabs);
        }
    }
})

export const { SWITCH_TO_CHILDSTACK, SWITCH_TO_TABS } = HeaderSlice.actions;
const HeaderReducer = HeaderSlice.reducer
export default HeaderReducer