import React from "react";
import ReactDOM from "react-dom";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";

import { notificationActions } from "../store/notificationSlice";

const CustomSnackbar = () => {
  const { open, message, severity, duration } = useSelector(
    (state) => state.notification
  );
  const dispatch = useDispatch();

  const onCloseHandler = () =>
    dispatch(notificationActions.closeNotification());

  return (
    <Snackbar
      open={open}
      onClose={onCloseHandler}
      autoHideDuration={duration}
      style={{ transition: "width 0.3s ease-in-out" }}
    >
      <Alert
        onClose={onCloseHandler}
        elevation={4}
        severity={severity}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

const Notification = () =>
  ReactDOM.createPortal(
    <CustomSnackbar />,
    document.getElementById("notification")
  );

export default Notification;
