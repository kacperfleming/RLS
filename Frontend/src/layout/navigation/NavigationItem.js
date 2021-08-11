import React from 'react';
import { makeStyles } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    item: {
        padding: '20px 5px',
        fontWeight: 'bold',
        width: '100%',
        minWidth: 100,
        color: theme.palette.common.white,
        transition: theme.transitions.create(['color', 'background-color'], {duration: theme.transitions.duration.standard, easing: theme.transitions.easing.easeOut}),
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.light,
            backgroundColor: theme.palette.primary.dark,

        }
    },
    activeItem: {
        color: theme.palette.secondary.main,
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
    }
}));

const NavigationItem = props => {
    const styles = useStyles();

    return (
        <NavLink to={props.to} exact={props.exact} className={styles.item} activeClassName={styles.activeItem}>
            {props.text}
        </NavLink>
    )
}

export default NavigationItem;