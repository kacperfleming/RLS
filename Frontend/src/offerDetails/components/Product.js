import React from "react";
import { ListItem, Typography, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "0.9rem",
    // boxShadow: "0 0 2px grey",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  attrKey: {
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
}));

const Product = ({ name, description, quantity, price }) => {
  const styles = useStyles();

  return (
    <ListItem className={styles.root}>
      <Typography color="primary">
        <Typography component="span" className={styles.attrKey}>
          Nazwa:{" "}
        </Typography>
        {name}
      </Typography>
      <Typography color="primary">
        <Typography component="span" className={styles.attrKey}>
          Ilość:{" "}
        </Typography>
        {quantity}
      </Typography>
      <Typography color="primary">
        <Typography component="span" className={styles.attrKey}>
          Cena jednostkowa:{" "}
        </Typography>
        {price}
      </Typography>
      <Typography color="primary">
        <Typography component="span" className={styles.attrKey}>
          Cena całkowita:{" "}
        </Typography>
        {quantity * price}
      </Typography>
      <Divider />
      <Typography color="textPrimary">{description}</Typography>
    </ListItem>
  );
};

export default Product;
