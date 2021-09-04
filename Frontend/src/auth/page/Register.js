import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useCustomForm from "../../hooks/use-form";

const REGISTER_FIELDS = [
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
    Masz już konto? <Link to="/login">Zaloguj się!</Link>
  </Typography>
);

const Register = (props) => {
  const { form } = useCustomForm({
    inputs: REGISTER_FIELDS,
    title: "Rejestracja",
    buttonText: "Zarejestruj mnie",
    url: "applicationUser",
    method: "POST",
    helperText: helperText,
    auth: false,
  });

  return form;
};

export default Register;
