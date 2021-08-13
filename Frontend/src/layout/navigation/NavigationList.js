import React from "react";
import { List, makeStyles } from "@material-ui/core";
import NavigationItem from "./NavigationItem";

const NAVIGATION_LIST_ITEMS = [
  {
    text: "Home",
    to: "/",
    exact: true
  },
  {
    text: "Create offer",
    to: "/offers/new",
  },
  {
    text: "Add product",
    to: "/products/new",
  },
];

// const NAVIGATION_LIST_ITEMS_AUTHENTICATED = [
//   {
//     text: "Home",
//     to: "/",
//     exact: true
//   },
//   {
//     text: "Create offer",
//     to: "/offers/new",
//   },
// ];

const useStyles = makeStyles(theme => ({
  list: {
      display: 'flex',
      minWidth: 250,
      textAlign: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 0,
      marginBottom: 20,

      [theme.breakpoints.up('md')]: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 0
      }
  },
}));

const NavigationList = (props) => {
  const styles = useStyles();

  return (
    <List className={styles.list}>
      {NAVIGATION_LIST_ITEMS.map((item) => (
        <NavigationItem key={item.to + item.text} text={item.text} to={item.to} exact={!!item.exact} />
      ))}
    </List>
  );
};

export default NavigationList;
