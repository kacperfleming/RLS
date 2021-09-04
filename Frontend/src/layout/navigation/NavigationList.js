import React from "react";
import { List, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

import NavigationItem from "./NavigationItem";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    minWidth: 250,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
    marginBottom: 20,

    [theme.breakpoints.up("md")]: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginBottom: 0,
    },
  },
}));

const NavigationList = (props) => {
  const styles = useStyles();

  const { token, userId } = useSelector((state) => state.auth);

  let navigationListItems = [
    {
      content: "Strona Główna",
      to: "/",
      exact: true,
    },
  ];

  if (token) {
    navigationListItems = [
      {
        content: "Strona Główna",
        to: "/",
        exact: true,
      },
      {
        content: "Stwórz Ofertę",
        to: "/offer/new",
      },
      {
        content: "Moje Oferty",
        to: `/offers/${userId}`,
      },
    ];
  }

  return (
    <List className={styles.list}>
      {navigationListItems.map((item) => (
        <NavigationItem
          key={item.to + item.content}
          to={item.to}
          exact={!!item.exact}
        >
          {item.content}
        </NavigationItem>
      ))}
    </List>
  );
};

export default NavigationList;
