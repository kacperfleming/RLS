import React from "react";
import {
  Box,
  makeStyles,
} from "@material-ui/core";

import HeaderBG from "./HeaderBG";

const useStyles = makeStyles(theme => ({
  header: {
    width: "100%",
    position: 'relative',
    height: 200,
    overflow: 'hidden',
    '@media (max-width: 450px)': {
      height: 'auto',
    }
  },
  image: {
    height: '100%',
    zIndex: 50,
    boxShadow: `0 0 6px ${theme.palette.primary.light}`,
    clipPath: 'inset(0px -15px 0px 0px)',

    '@media (max-width: 450px)': {
      width: '100%',
      height: 'auto'
    }
  },
}));

const Header = (props) => {
  const styles = useStyles();

  return (
      <Box component="header" className={styles.header}>
        <HeaderBG />
        <img src="/assets/images/photo_2021-08-02_21-24-01.jpg" alt="oferty życia" className={styles.image}/>
      </Box>
  );
};

export default Header;
