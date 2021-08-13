import React from "react";
import { List, makeStyles } from "@material-ui/core";
import NavigationItem from "./NavigationItem";

const NAVIGATION_LIST_ITEMS = [
  {
    text: "Strona Główna",
    to: "/",
    exact: true
  },
  {
    text: "Stwórz Ofertę",
    to: "/offers/new",
  },
  {
    text: "Dodaj Produkt",
    to: "/products/new",
  },
];

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
