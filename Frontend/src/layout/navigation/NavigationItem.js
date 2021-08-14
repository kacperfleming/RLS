import React from "react";
import { makeStyles, ListItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: "20px 5px",
    fontWeight: "bold",
    width: "100%",
    minWidth: 100,
    transition: theme.transitions.create(["color", "background-color"], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeOut,
    }),
    [theme.breakpoints.up("md")]: {
      color: theme.palette.common.white,
    },
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.primary.dark,
    },
  },
  activeItem: {
    color: theme.palette.secondary.main,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
}));

const NavigationItem = (props) => {
  const styles = useStyles();

  return (
    <ListItem style={{ padding: 0, textAlign: 'center' }}>
      <NavLink
        to={props.to}
        exact={props.exact}
        className={styles.item}
        activeClassName={styles.activeItem}
      >
        {props.children}
      </NavLink>
    </ListItem>
  );
};

export default NavigationItem;
