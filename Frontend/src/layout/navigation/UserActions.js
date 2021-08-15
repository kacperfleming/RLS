import React from 'react';
import { List, IconButton, makeStyles } from "@material-ui/core";
import {VpnKey, ExitToApp} from '@material-ui/icons';
import { useSelector } from 'react-redux';

import CartIcon from '../UIElements/CartIcon';
import NavigationItem from "./NavigationItem";

const useStyles = makeStyles(theme=> ({
    list: {
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 0,
    }
}));

const UserActions = props => {
    const styles = useStyles();

    const token = useSelector(state => state.auth.token);

    const items = useSelector(state => state.cart.items);

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
                content: <CartIcon itemsCount={items.length} />
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