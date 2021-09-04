import React from "react";
import { Box, makeStyles } from "@material-ui/core";

import HeaderBG from "./HeaderBG";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    flexDirection: "row",
    height: 200,
    overflow: "hidden",
    display: "none",

    "@media (min-width: 450px)": {
      display: "flex",
    },
  },
  image: {
    height: "100%",
    objectFit: "fill",

    "@media (min-width: 651px)": {
      zIndex: 50,
      boxShadow: `0 0 6px ${theme.palette.primary.light}`,
      clipPath: "inset(0px -15px 0px 0px)",
    },
  },
}));

const Header = (props) => {
  const styles = useStyles();

  return (
    <Box component="header" className={styles.header}>
      <img
        src="/assets/images/photo_2021-08-02_21-24-01.jpg"
        alt="oferty życia"
        className={styles.image}
      />
      <HeaderBG />
    </Box>
  );
};

export default React.memo(Header);
