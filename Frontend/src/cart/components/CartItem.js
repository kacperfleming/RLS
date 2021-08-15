import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Avatar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 300,
    margin: "0 auto",

    // [theme.breakpoints.up('sm')]: {
    //     width: '20%'
    // }
  },
}));

const CartItem = (props) => {
  const styles = useStyles();

  return (
    <Card className={styles.root} elevation={2}>
      <CardHeader
        avatar={<Avatar>{props.author[0].toUpperCase()}</Avatar>}
        action={
          <IconButton onClick={(event) => props.openMenu(event, props.id)} style={{ outline: "none" }}>
            <MoreVert />
          </IconButton>
        }
        title={props.name}
      />

      <CardContent component="ol">
        <Typography component="p" variant="body2" color="textSecondary">
          Ilość: {props.quantity}
        </Typography>
        <Typography component="p" variant="body2" color="textSecondary">
          Cena jednostkowa: {props.price.toFixed(2)}zł
        </Typography>
        <Divider style={{ margin: "5px 0" }} />
        <Typography component="p" variant="body1" color="textPrimary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CartItem;
