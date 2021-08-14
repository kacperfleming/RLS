import React from 'react';
import { AppBar, Toolbar, Hidden, IconButton, Backdrop, Drawer, makeStyles } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';

import NavigationList from './NavigationList';
import UserActions from './UserActions';

const useStyles = makeStyles({
    navigation: {
       height: 64
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 64
    },
    drawer: {
      width: '30%',
      minWidth: 500,
    }
})

const Navigation = props => {
    const styles = useStyles();

  return (
    <AppBar component="nav" position="sticky" className={styles.navigation}>
      <Toolbar component="nav" className={styles.toolbar}>
        <Hidden mdUp>
          <IconButton onClick={props.openSideDrawerHandler} style={{outline: 'none'}}>
            <Menu fontSize="large" />
          </IconButton>
        </Hidden>
        <Backdrop
          onClick={props.closeSideDrawerHandler}
          open={props.isMenuOpen}
        >
          <Drawer className={styles.drawer} anchor="left" open={props.isMenuOpen}>
            <NavigationList />
            <IconButton style={{height: 50, width: 50, margin: '0 auto', outline: 'none'}} title="Close">
              <Close />
            </IconButton>
          </Drawer>
        </Backdrop>
        <Hidden smDown>
            <NavigationList />
        </Hidden>
            <UserActions />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
