import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: 0,
    isLogin: false
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        getUserLogin: (state) => {

        }
    }
})

export const {getUserLogin} = authSlice.actions;
export default authSlice.reducer;