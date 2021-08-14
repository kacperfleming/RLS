import { configureStore } from "@reduxjs/toolkit";

import authReducer, {AuthSlice} from "./authSlice";
import cartReducer, {CartSlice} from "./cartSlice";
import userReducer, {UserSlice} from "./userSlice";

export interface RootReducer {
    auth: AuthSlice,
    user: UserSlice,
    cart: CartSlice
}

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        cart: cartReducer
    }
});

export default store;