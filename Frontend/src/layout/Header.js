import React from "react";
import {
  Box,
  makeStyles,
} from "@material-ui/core";

import HeaderBG from "./HeaderBG";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: 200,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    zIndex: 50,
  },
});

const Header = (props) => {
  const styles = useStyles();

  return (
      <Box component="header" className={styles.header}>
        <HeaderBG />
        <img src="./photo_2021-08-02_21-24-01.jpg" alt="oferty życia" className={styles.image}/>
      </Box>
  );
};

export default Header;
