import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { ExpandMore, MoreVert } from "@material-ui/icons";
import { useParams } from "react-router-dom";

import useHttp from "../../hooks/use-http";

const OfferDetails = (props) => {
  const [expanded, setExpanded] = useState();

  const { sendRequest, data, loading, error } = useHttp();

  const params = useParams();
  const { oid } = params;

  useEffect(() => {
    if (data) return;
    sendRequest({ url: `offer/${oid}/details` });
  }, [data, oid]);

  return (
    <>
      <Card component="li" elevation={2}>
        <CardHeader
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
          <Typography component="li" variant="body2" color="textSecondary">
            Cena przed obniżką: {props.price.toFixed(2)}zł
          </Typography>
          <Typography component="li" variant="body2" color="textSecondary">
            Cena po obniżce: {(props.price - props.discount).toFixed(2)}zł
          </Typography>
          <Divider style={{ margin: "5px 0" }} />
          <Typography component="li" variant="body1" color="textPrimary">
            {props.description}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton onClick={() => setExpanded((prev) => !prev)}>
            <ExpandMore />
          </IconButton>
        </CardActions>

        <Collapse in={expanded}>
          <Typography component="li" variant="body2" color="textSecondary">
            Kategoria: {props.category}
          </Typography>
          <Typography component="li" variant="body2" color="textSecondary">
            Grupa oferująca: {props.offerrorGroup}
          </Typography>
          <Divider style={{ margin: "5px 0" }} />
          <Typography component="li" variant="body1" color="textPrimary">
            Obszar: {props.area}
          </Typography>
          <Typography component="li" variant="body1" color="textPrimary">
            Opcja {props.option}
          </Typography>
          <Typography component="li" variant="body1" color="textPrimary">
            Dlaczego to robię: {props.reason}
          </Typography>
          <Typography component="li" variant="body1" color="textPrimary">
            Pilność: {props.isUrgent ? "pilne" : "niepilne"}
          </Typography>
        </Collapse>
      </Card>
    </>
  );
};

export default OfferDetails;
