import { configureStore } from "@reduxjs/toolkit";

import authReducer, { AuthSlice } from "./authSlice";
import cartReducer, { CartSlice } from "./cartSlice";
import userReducer, { UserSlice } from "./userSlice";
import notificationReducer, { NotificationSlice } from "./notificationSlice";

export interface RootReducer {
  auth: AuthSlice;
  user: UserSlice;
  cart: CartSlice;
  notification: NotificationSlice;
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    notification: notificationReducer,
  },
});

export default store;
