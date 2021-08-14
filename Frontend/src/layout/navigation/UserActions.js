import React from 'react';
import { List, Tooltip, IconButton, makeStyles, Icon } from "@material-ui/core";
import {VpnKey, ExitToApp} from '@material-ui/icons';
import { useSelector } from 'react-redux';

import CartIcon from '../UIElements/CartIcon';
import NavigationItem from "./NavigationItem";

const useStyles = makeStyles(theme=> ({
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 0,
    }
}));

const UserActions = props => {
    const styles = useStyles();

    const token = useSelector(state => state.auth.token);

    let userActions = [
        {
            to: '/login',
            content: <VpnKey />
        }
    ];

    if (token) {
        userActions = [
            {
                to: '/cart',
                content: <CartIcon itemsCount={2} />
            },
            {
                to: '/logout',
                content: <ExitToApp />
            },
        ]
    }

    return (
        <List className={styles.list}>
            {userActions.map(item => <NavigationItem key={item.to} to={item.to} exact={!!props.exact}>{<IconButton style={{outline: 'none', padding: 0}}>{item.content}</IconButton>}</NavigationItem>)}
        </List>
    )
}

export default UserActions;