import { configureStore } from "@reduxjs/toolkit";

import authReducer, {AuthSlice} from "./authSlice";
import cartReducer, {CartSlice} from "./cartSlice";

export interface RootReducer {
    auth: AuthSlice,
    cart: CartSlice
}

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    }
});

export default store;