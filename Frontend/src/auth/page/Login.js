import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import useCustomForm from "../../hooks/use-form";
import { authActions } from "../../store/authSlice";

const LOGIN_FIELDS = [
  {
    label: "nazwa użytkownika",
    fieldName: "userName",
    type: "text",
    minLenght: 3,
    maxLength: 20,
    required: true,
  },
  {
    label: "hasło",
    fieldName: "password",
    type: "password",
    minLenght: 8,
    maxLength: 24,
    required: true,
  },
];

const helperText = (
  <Typography component="span">
    Nie masz jeszcze konta? <Link to="/register">Załóż je.</Link>
  </Typography>
);

const Login = (props) => {
  const { form, responseData } = useCustomForm({
    inputs: LOGIN_FIELDS,
    title: "Logowanie",
    buttonText: "Zaloguj mnie",
    helperText: helperText,
    url: "login",
    method: "POST",
    onSuccessText: "Logged In!",
    onErrorText: "Something went wrong!",
    auth: false,
  });

  const dispatch = useDispatch();

  if (responseData?.token && responseData?.userId) {
    const { token, userId } = responseData;
    localStorage.setItem("jwt", token);
    localStorage.setItem("userId", userId);
    dispatch(authActions.login({ token: token, userId: userId }));
  }

  return form;
};

export default Login;
