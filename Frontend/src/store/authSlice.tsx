import {createSlice} from '@reduxjs/toolkit'

export interface AuthSlice {
    userId?: string;
    token?: string;
}

const initialState:AuthSlice = {
    userId: undefined,
    token: undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.userId = action.payload.userId;
            state.token = action.payload.token;
        },
        logout(state) {
            state.userId = undefined;
            state.token = undefined;
        }
    }
});

export default authSlice.reducer;

export const authActions = authSlice.actions;