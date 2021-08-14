import {createSlice} from '@reduxjs/toolkit'

export interface UserSlice {
    username: string | null;
}

const initialState:UserSlice = {
    username: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData(state, action) {
            state.username = action.payload.username;
        },
        clearData(state) {
            state = initialState;
        }
    }
});

export default userSlice.reducer;

export const userActions = userSlice.actions;