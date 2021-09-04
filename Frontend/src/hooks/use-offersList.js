import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { cartActions } from "../store/cartSlice";
import { notificationActions } from "../store/notificationSlice";
import OffersList from "../shared/offers/OffersList";
import FallbackComp from "../layout/FallbackComp";
import useHttp from "./use-http";

const DUMMY_DATA = [
  {
    id: "1",
    name: "oferta przykładowa",
    description: "Przykładowy opis",
    price: 35.1,
    discount: 2,
    author: "u22222",
  },
  {
    id: "2",
    name: "oferta przykładowa",
    description: "Przykładowy opis",
    price: 35.1,
    discount: 2,
    author: "u22222",
  },
  {
    id: "3",
    name: "oferta ogrodnicza",
    description: "świeże warzywa i owoce",
    price: 30.25,
    discount: 5,
    author: "u22222",
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

const useOffersList = ({ url, auth }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const offersInCart = useSelector((state) => state.cart.offers);

  const { error, loading, sendRequest } = useHttp();

  const history = useHistory();

  const [offers, setOffers] = useState(DUMMY_DATA);

  const [id, setId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthor, setIsAuthor] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  // useEffect(() => {
  //   sendRequest({ url, auth }).then((response) => {
  //     if (response.ok) {
  //       setOffers(response.data);
  //     }
  //   });
  // }, [sendRequest, url, auth]);

  const openMenuHandler = (event, id, author) => {
    setAnchorEl(event.currentTarget);
    setId(id);
    if (author === userId) {
      setIsAuthor(true);
    } else {
      setIsInCart(offersInCart.find((offer) => offer.id === id));
    }
  };

  const closeMenuHandler = () => {
    setAnchorEl(null);
    setId(null);
    setIsAuthor(false);
  };

  const removeFromCartHandler = (id) =>
    dispatch(cartActions.removeFromCart(id));

  const goToDetailsHandler = () => history.push(`/offer/${id}/details`);

  const removeOfferHandler = () => {
    sendRequest({ url: `/offer/${id}`, method: "DELETE", auth: true })
      .then((response) => {
        if (response.ok) {
          setOffers((prev) => prev.filter((offer) => offer.id !== id));
          dispatch(
            notificationActions.openNotification({
              message: "Offer successfully deleted!",
              severity: "success",
            })
          );
        } else {
          dispatch(
            notificationActions.openNotification({
              message: "Could not deleted this offer. Please, try again.",
              severity: "error",
            })
          );
        }
      })
      .catch((err) => {
        dispatch(
          notificationActions.openNotification({
            message: "Could not deleted this offer. Please, try again.",
            severity: "error",
          })
        );
      });
  };

  const editOfferHandler = () => history.push(`/offer/edit/${id}`);

  const menu = (
    <Menu
      id="offer-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={closeMenuHandler}
      transitionDuration={{ exit: 0, enter: 300 }}
    >
      {userId && !isAuthor && isInCart && (
        <MenuItem onClick={removeFromCartHandler}>Usuń z koszyka</MenuItem>
      )}
      <MenuItem onClick={goToDetailsHandler}>Zobacz szczegóły</MenuItem>
      {userId && isAuthor && (
        <>
          <MenuItem onClick={editOfferHandler}>Edytuj</MenuItem>
          <MenuItem onClick={removeOfferHandler}>Usuń</MenuItem>
        </>
      )}
    </Menu>
  );

  let offersList = null;

  if (offers) {
    offersList = (
      <>
        <OffersList
          offers={offers.filter(
            (offer) =>
              !!!offersInCart.find((cartOffer) => cartOffer.id === offer.id)
          )}
          openMenu={openMenuHandler}
        />
        {menu}
      </>
    );
  }

  return offersList;
};

export default useOffersList;
