import React from "react";
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Backdrop,
  Drawer,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";

import NavigationList from "./NavigationList";
import UserActions from "./UserActions";

const useStyles = makeStyles((theme) => ({
  navigation: {
    height: 64,
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 64,
  },
  drawer: {
    width: "30%",
    minWidth: 250,
  },
  drawerBrandName: {
    textAlign: "center",
    fontWeight: "bold",
    padding: "10px 0 0",
  },
}));

const Navigation = (props) => {
  const styles = useStyles();

  return (
    <AppBar component="nav" position="sticky" className={styles.navigation}>
      <Toolbar component="nav" className={styles.toolbar}>
        <Hidden mdUp>
          <IconButton
            onClick={props.openSideDrawerHandler}
            style={{ outline: "none" }}
          >
            <Menu fontSize="large" />
          </IconButton>
        </Hidden>
        <Backdrop
          onClick={props.closeSideDrawerHandler}
          open={props.isMenuOpen}
        >
          <Drawer
            className={styles.drawer}
            anchor="left"
            open={props.isMenuOpen}
          >
            <Typography
              className={styles.drawerBrandName}
              component="h2"
              variant="h5"
            >
              OFERTY ŻYCIA
            </Typography>
            <NavigationList />
            <IconButton
              style={{
                height: 50,
                width: 50,
                margin: "0 auto",
                outline: "none",
              }}
              title="Close"
            >
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
