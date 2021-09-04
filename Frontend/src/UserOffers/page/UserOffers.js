import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Typography } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import OffersList from "../../shared/offers/OffersList";
import FallbackComp from "../../layout/FallbackComp";
import useHttp from "../../hooks/use-http";

const DUMMY_DATA = [
  {
    id: "1",
    name: "oferta ogrodnicza",
    description: "świeże warzywa i owoce",
    price: 30.25,
    discount: 5,
    author: "u123456",
  },
  {
    id: "2",
    name: "oferta ogrodnicza",
    description: "świeże warzywa i owoce",
    price: 30.25,
    discount: 5,
    author: "u123456",
  },
  {
    id: "3",
    name: "oferta ogrodnicza",
    description: "świeże warzywa i owoce",
    price: 30.25,
    discount: 5,
    author: "u123456",
  },
  {
    id: "4",
    name: "oferta ogrodnicza",
    description: "świeże warzywa i owoce",
    price: 30.25,
    discount: 5,
    author: "u123456",
  },
  {
    id: "5",
    name: "oferta ogrodnicza",
    description: "świeże warzywa i owoce",
    price: 30.25,
    discount: 5,
    author: "u123456",
  },
  {
    id: "6",
    name: "oferta ogrodnicza",
    description: "świeże warzywa i owoce",
    price: 30.25,
    discount: 5,
    author: "u123456",
  },
];

const UserOffers = (props) => {
  const userId = useSelector((state) => state.auth.userId);
  const offers = useSelector((state) => state.cart.offers);

  const history = useHistory();
  const params = useParams();

  const { data, error, loading, sendRequest } = useHttp();

  const [anchorEl, setAnchorEl] = useState(null);

  const [id, setId] = useState(null);
  const [isAuthor, setIsAuthor] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const openMenuHandler = (event, id, author) => {
    setAnchorEl(event.currentTarget);
    setId(id);
    if (author === userId) {
      setIsAuthor(true);
    } else {
      setIsInCart(offers.find((offer) => offer.id === id));
    }
  };

  const closeMenuHandler = () => {
    setAnchorEl(null);
    setId(null);
    setIsAuthor(false);
  };

  const addToCartHandler = () => {};

  const removeFromCartHandler = () => {};

  const goToDetailsHandler = (id) => history.push(`/offers/${id}/details`);

  const removeOffertHandler = () => {};

  const editOffertHandler = () => {};

  //   useEffect(() => {
  //     if (data) return;
  //     sendRequest({ url: `applicationUser/${params.uid}/offers` });
  //   }, []);

  if (error) return null;

  if (loading) return <FallbackComp />;

  if (!DUMMY_DATA)
    return (
      <Typography component="h1" variant="h4">{`${
        userId === params.id ? "You have" : "User with provided id has"
      } no offers.`}</Typography>
    );

  return (
    <>
      <OffersList offers={DUMMY_DATA} openMenu={openMenuHandler} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenuHandler}
        transitionDuration={{ exit: 0, enter: 300 }}
      >
        {!isAuthor &&
          ((isInCart && (
            <MenuItem onClick={removeFromCartHandler}>Usuń z koszyka</MenuItem>
          )) || (
            <MenuItem onClick={addToCartHandler}>Dodaj do koszyka</MenuItem>
          ))}
        <MenuItem onClick={goToDetailsHandler}>Zobacz szczegóły</MenuItem>
        {isAuthor && (
          <>
            <MenuItem onClick={() => {}}>Edytuj</MenuItem>
            <MenuItem onClick={() => {}}>Usuń</MenuItem>
          </>
        )}
      </Menu>
    </>
  );
};

export default UserOffers;
