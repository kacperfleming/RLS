import React from "react";
import { Typography } from "@material-ui/core";
import {Link} from 'react-router-dom';

import useCustomForm from "../../hooks/use-form";

const LOGIN_FIELDS = [
    {
        label: 'nazwa użytkownika',
        type: 'text',
        minLenght: 3,
        maxLength: 20,
        required: true
    },
    {
        label: 'hasło',
        type: 'password',
        minLenght: 8,
        maxLength: 24,
        required: true
    }
];

const helperText = <Typography component="span">Nie masz jeszcze konta? <Link to="/register">Załóż je.</Link></Typography>;

const Login = props => {
    const {form} = useCustomForm({inputs: LOGIN_FIELDS, title: 'Logowanie', buttonText: 'Zaloguj mnie', helperText: helperText, url: 'login', method: 'POST', auth: false});

    return form;
}

export default Login;