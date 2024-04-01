import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_PERSISTED_STATE = {
    homeRef: null,
    aboutRef: null,
    projectsRef: null,
    contactRef: null,
    currentTab: 'home'
}

export const persistedSlice = createSlice({
    name: 'persistedSlice',
    initialState: INITIAL_PERSISTED_STATE,
    reducers: {
        addRef: (state: any, action) => {
            state[action.payload.refName] = action.payload.refValue;
        },
        changeTab: (state: any, action) => {
            state.currentTab = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    addRef,
    changeTab
} = persistedSlice.actions

export default persistedSlice.reducer
