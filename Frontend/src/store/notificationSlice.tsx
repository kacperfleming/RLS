import { createSlice } from "@reduxjs/toolkit";

export interface NotificationSlice {
  open: boolean;
  message: string;
  severity: "info" | "error" | "warning" | "success";
  duration: number;
}

const initialState: NotificationSlice = {
  open: false,
  message: "",
  severity: "info",
  duration: 3000,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    openNotification(state: NotificationSlice, action) {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity || initialState.severity;
      state.duration = action.payload.duration || initialState.duration;
    },
    closeNotification(state: NotificationSlice) {
      state.open = false;
      state.duration = initialState.duration;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
