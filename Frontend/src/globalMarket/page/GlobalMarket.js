import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../../store/cartSlice";
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
    author: "u12345",
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

const GlobalMarket = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const offers = useSelector((state) => state.cart.offers);

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

  const addToCartHandler = (offer) => dispatch(cartActions.addToCart(offer));

  const removeFromCartHandler = (id) =>
    dispatch(cartActions.removeFromCart(id));

  const goToDetailsHandler = () => {};

  const removeOffertHandler = () => {};

  const editOffertHandler = () => {};

  //   useEffect(() => {
  //     if (data) return;
  //     sendRequest({ url: `applicationUser/${params.uid}/offers` });
  //   }, []);

  if (error) return null;

  if (loading) return <FallbackComp />;

  return (
    <>
      <OffersList offers={DUMMY_DATA} openMenu={openMenuHandler} />
      <Menu
        id="offer-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenuHandler}
        transitionDuration={{ exit: 0, enter: 300 }}
      >
        {userId &&
          !isAuthor &&
          ((isInCart && (
            <MenuItem onClick={() => {}}>Usuń z koszyka</MenuItem>
          )) || <MenuItem onClick={() => {}}>Dodaj do koszyka</MenuItem>)}
        <MenuItem onClick={() => {}}>Zobacz szczegóły</MenuItem>
        {userId && isAuthor && (
          <>
            <MenuItem onClick={() => {}}>Edytuj</MenuItem>
            <MenuItem onClick={() => {}}>Usuń</MenuItem>
          </>
        )}
      </Menu>
    </>
  );
};

export default GlobalMarket;
