import React from "react";
import {
  ListItem,
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
    }
  }));

const Offer = (props) => {
    const styles = useStyles();
    console.log(props.name);

    return (
    <Card className={styles.root} component="li" elevation={2}>
      <CardHeader
        // avatar={<Avatar>{props.author[0].toUpperCase()}</Avatar>}
        action={
          <IconButton
            onClick={(event) => props.openMenu(event, props.id, props.author)}
            style={{ outline: "none" }}
          >
            <MoreVert />
          </IconButton>
        }
        title={props.name}
      />

      <CardContent component="ul">
        <Typography component="p" variant="body2" color="textSecondary">
          Cena przed obniżką: {props.price.toFixed(2)}zł
        </Typography>
        <Typography component="li" variant="body2" color="textSecondary">
          Cena po obniżce: {(props.price - props.discount).toFixed(2)}zł
        </Typography>
        <Divider style={{ margin: "5px 0" }} />
        <Typography component="p" variant="body1" color="textPrimary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
    )
};

export default Offer;
