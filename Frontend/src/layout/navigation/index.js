import React from 'react';
import { AppBar, Toolbar, Hidden, IconButton, Backdrop, Drawer, makeStyles } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';

import NavigationList from './NavigationList';

const useStyles = makeStyles({
    navigation: {
       height: 64
    },
    toolbar: {
        height: 64
    }
})

const Navigation = props => {
    const styles = useStyles();

  return (
    <AppBar component="nav" position="sticky" className={styles.navigation}>
      <Toolbar className={styles.toolbar}>
        <Hidden mdUp>
          <IconButton onClick={props.openSideDrawerHandler} style={{outline: 'none'}}>
            <Menu fontSize="large" />
          </IconButton>
        </Hidden>
        <Backdrop
          onClick={props.closeSideDrawerHandler}
          open={props.isMenuOpen}
        >
          <Drawer anchor="left" open={props.isMenuOpen}>
            <IconButton style={{height: 50, width: 50, margin: '0 auto'}} title="Close">
              <Close />
            </IconButton>
            <NavigationList />
          </Drawer>
        </Backdrop>
        <Hidden smDown>
            <NavigationList />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
