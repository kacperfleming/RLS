import React, { useState } from 'react';
import {Box, Paper, makeStyles} from '@material-ui/core';

import Header from './Header';
import Navigation from './navigation';
import Footer from './Footer';


const useStyles = makeStyles(theme => ({
    root: {
        
    },
    header: {

    },
    main: {
        position: 'relative',
        minHeight: 'calc(100vh - 264px)',
        padding: theme.spacing(2)
    },
    footer: {

    }
}));

const Layout = (props) => {
    const styles = useStyles();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openSideDrawerHandler = () => setIsMenuOpen(true);
    const closeSideDrawerHandler = () => setIsMenuOpen(false);

    return (
        <Box component="div" className={styles.root}>
            <Header className={styles.header} />
            <Navigation isMenuOpen={isMenuOpen} openSideDrawerHandler={openSideDrawerHandler} closeSideDrawerHandler={closeSideDrawerHandler} />
            <Paper component="main" square elevation={0} className={styles.main}>
                {props.children}
            </Paper>
            <Footer className={styles.footer} />
        </Box>
    )
}

export default Layout;