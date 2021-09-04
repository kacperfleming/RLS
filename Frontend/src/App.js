import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useJwt } from "react-jwt";

import Layout from "./layout";
import FallbackComp from "./layout/FallbackComp";
import { authActions } from "./store/authSlice";
import { notificationActions } from "./store/notificationSlice";

const NewProductForm = lazy(() =>
  import("./newProductForm/page/NewProductForm")
);
const NewOfferForm = lazy(() => import("./newOfferForm/page/NewOfferForm"));
const Cart = lazy(() => import("./cart/page/Cart"));

const Login = lazy(() => import("./auth/page/Login"));
const Register = lazy(() => import("./auth/page/Register"));
const Logout = lazy(() => import("./auth/page/Logout"));
const GlobalMarket = lazy(() => import("./globalMarket/page/GlobalMarket"));
const UserOffers = lazy(() => import("./UserOffers/page/UserOffers"));
const OfferDetails = lazy(() => import("./offerDetails/page/OfferDetails"));

function App() {
  const { decodedToken, isExpired } = useJwt(localStorage.getItem("jwt") || "");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    let timeout;
    if (!!decodedToken) {
      if (!isExpired) {
        try {
          const expiresIn = decodedToken.exp - Date.now() / 1000;
          dispatch(
            authActions.login({
              token: localStorage.getItem("jwt"),
              userId: decodedToken.userId,
            })
          );
          timeout = setTimeout(() => {
            dispatch(
              notificationActions.openNotification({
                message: "You were logout automatically.",
                type: "info",
              })
            );
            dispatch(authActions.logout());
          }, expiresIn * 1000);
        } catch (err) {
          dispatch(
            notificationActions.openNotification({
              message: "Sorry, auto-logging in failed.",
              severity: "error",
            })
          );
          dispatch(authActions.logout());
        }
      } else {
        dispatch(authActions.logout());
      }
    }

    return () => {
      if (typeof timeout !== "undefined") clearTimeout(timeout);
    };
  }, [decodedToken, isExpired, dispatch]);

  let routes = (
    <Switch>
      {/* <Route path="/offers/:oid" component={} /> */}

      {/* <Route path="/products/:pid" component={} /> */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/offers/:oid/details" component={OfferDetails} />

      <Route path="/" exact component={GlobalMarket} />
      <Redirect to="/login" />
    </Switch>
  );

  if (token) {
    routes = (
      <Switch>
        <Route path="/offers/new" component={NewOfferForm} />
        {/* <Route path="/offers/edit/:oid" component={} />
    <Route path="/offers/:oid" component={} /> */}

        <Route path="/offers/:oid/add-product" component={NewProductForm} />
        <Route path="/offers/:oid/details" component={OfferDetails} />
        <Route path="/offers/:uid" component={UserOffers} />
        {/* <Route path="/products/edit/:pid" component={} />
    <Route path="/products/:pid" component={} /> */}

        <Route path="/cart" component={Cart} />

        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={GlobalMarket} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<FallbackComp />}>{routes}</Suspense>
    </Layout>
  );
}

export default App;
