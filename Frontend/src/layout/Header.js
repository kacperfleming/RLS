import { AppBar, Toolbar, Backdrop, Drawer, IconButton } from "@material-ui/core";
import {Menu, Close} from '@material-ui/icons';

const Header = (props) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Hidden mdUp>
          <IconButton onClick={openSideDrawerHandler}>
            <Menu fontSize="large" />
          </IconButton>
        </Hidden>
        <Backdrop onClick={closeSideDrawerHandler} open={isMenuOpen}>
          <Drawer
            classes={{ paper: classes.drawer }}
            anchor="left"
            open={isMenuOpen}
          >
            <IconButton className={classes.backButton} title="Close">
              <Close />
            </IconButton>
            <UserPanel />
          </Drawer>
        </Backdrop>
        <NavigationList />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
