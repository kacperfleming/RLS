import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authActions } from '../../store/authSlice';

const Logout = () => {
    const dispatch = useDispatch();

    dispatch(authActions.logout());

    return <Redirect to="/" />
}

export default Logout;