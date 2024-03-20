import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: 0,
    isLogin: false
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setUserLogin: (state, payload) => {
            state.userName = payload.userName;
            state.isLogin = true;
        },
        logoutSystem: (state, payload) => {
            state.userName = "";
            state.isLogin = false;
        }

    }
})

export const {setUserLogin, logoutSystem} = authSlice.actions;
export default authSlice.reducer;