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
import Product from "../components/Product";

const DUMMY_PRODUCTS = [
  {
    id: "2",
    name: "Bazylia",
    description: "Świeża bazylia uprawiana bez używania sztucznych pestycydów.",
    quantity: 50,
    price: 3.5,
  },
  {
    id: "abcdefg",
    name: "Ręcznie robione krzesła",
    description:
      "Rzeźbione, dębowe krzesła ogrodowe wykonywane ręcznie i zaimpregnowane.",
    quantity: 10,
    price: 400,
  },
  {
    id: "abcdefgh",
    name: "Miód lipowy",
    description: "Pakowany w słoikach o pojemności 1L.",
    quantity: 25,
    price: 6.2,
  },
];

const DUMMY_DETAILS = {
  id: "1",
  name: "oferta przykładowa",
  description: "Przykładowy opis",
  price: 35.1,
  discount: 2,
  author: "u22222",
  category: "test",
  offerrorGroup: "test",
  area: "test",
  option: "test",
  reason: "test",
  isUrgent: false,
  products: DUMMY_PRODUCTS,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    minWidth: 300,
    maxWidth: 600,
    margin: "20px auto",
    padding: "10px 20px",
  },
  offerDetails: {
    listStyle: "none",
  },
  attr: {},
  attrKey: {
    fontWeight: "bold",
    color: theme.palette.common.black,
  },
  products: {
    listStyle: "none",
    padding: 0,
    "& li:not(:first-child)": {
      marginTop: 20,
    },
  },
}));

const OfferDetails = (props) => {
  const styles = useStyles();

  const [expanded, setExpanded] = useState();

  const { sendRequest, data, loading, error } = useHttp();

  const params = useParams();
  const { oid } = params;

  // useEffect(() => {
  //   if (data) return;
  //   sendRequest({ url: `offer/${oid}/details` });
  // }, [data, oid]);

  return (
    <Card elevation={2} className={styles.root}>
      <CardHeader
        action={
          <IconButton onClick={() => {}} style={{ outline: "none" }}>
            <MoreVert />
          </IconButton>
        }
        title={DUMMY_DETAILS.name}
      />

      <CardContent component="ul" className={styles.offerDetails}>
        <Typography component="li" variant="body1" color="primary">
          <Typography component="span" className={styles.attrKey}>
            Cena przed obniżką:{" "}
          </Typography>
          {DUMMY_DETAILS.price.toFixed(2)}zł
        </Typography>
        <Typography component="li" variant="body1" color="primary">
          <Typography component="span" className={styles.attrKey}>
            Cena po obniżce:{" "}
          </Typography>
          {(DUMMY_DETAILS.price - DUMMY_DETAILS.discount).toFixed(2)}zł
        </Typography>
        <Divider style={{ margin: "5px 0" }} />
        <Typography component="li" variant="body1" color="primary">
          <Typography component="span" className={styles.attrKey}>
            Kategoria:{" "}
          </Typography>
          {DUMMY_DETAILS.category}
        </Typography>
        <Typography component="li" variant="body1" color="primary">
          <Typography component="span" className={styles.attrKey}>
            Grupa oferująca:{" "}
          </Typography>
          {DUMMY_DETAILS.offerrorGroup}
        </Typography>
        <Typography component="li" variant="body1" color="primary">
          <Typography component="span" className={styles.attrKey}>
            Obszar:{" "}
          </Typography>
          {DUMMY_DETAILS.area}
        </Typography>
        <Typography component="li" variant="body1" color="primary">
          <Typography component="span" className={styles.attrKey}>
            Opcja:{" "}
          </Typography>
          {DUMMY_DETAILS.option}
        </Typography>
        <Typography component="li" variant="body1" color="primary">
          <Typography component="span" className={styles.attrKey}>
            Dlaczego to robię:{" "}
          </Typography>
          {DUMMY_DETAILS.reason}
        </Typography>
        <Typography component="li" variant="body1" color="primary">
          <Typography component="span" className={styles.attrKey}>
            Pilność:{" "}
          </Typography>
          {DUMMY_DETAILS.isUrgent ? "pilne" : "niepilne"}
        </Typography>
        <Divider style={{ margin: "5px 0" }} />
        <Typography component="li" variant="body1" color="textPrimary">
          {DUMMY_DETAILS.description}
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton
          onClick={() => setExpanded((prev) => !prev)}
          style={{ outline: "none" }}
        >
          <ExpandMore />
        </IconButton>
      </CardActions>

      <Collapse className={styles.products} component="ul" in={expanded}>
        {DUMMY_DETAILS.products.map((product) => (
          <Product {...product} />
        ))}
      </Collapse>
    </Card>
  );
};

export default OfferDetails;
