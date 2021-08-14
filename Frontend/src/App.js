import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./layout";
import FallbackComp from "./layout/FallbackComp";
import GetAllOffers from "./components/GetAllOffers";
import CreateOfferComponent from "./components/CreateOfferComponent";
import ViewOfferComponent from "./components/ViewOfferComponent";

const NewProductForm = lazy(() =>
  import("./newProductForm/page/NewProductForm")
);
const NewOfferForm = lazy(() => import("./newOfferForm/page/NewOfferForm"));
const Cart = lazy(() => import("./cart/page/Cart"));

const Login = lazy(() => import("./auth/page/Login"));
const Register = lazy(() => import("./auth/page/Register"));
const Logout = lazy(() => import("./auth/page/Logout"));

function App() {
  const token = useSelector(state => state.auth.token);

  let routes = (
    <Switch>

    {/* <Route path="/offers/:oid" component={} /> */}

    {/* <Route path="/products/:pid" component={} /> */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/" exact component={GetAllOffers} />
      <Redirect to="/login" />
    </Switch>
  );

  if (token) {
    routes = (
      <Switch>
        <Route path="/offers/new" component={NewOfferForm} />
        {/* <Route path="/offers/edit/:oid" component={} />
    <Route path="/offers/:oid" component={} /> */}

        <Route path="/products/new" component={NewProductForm} />
        {/* <Route path="/products/edit/:pid" component={} />
    <Route path="/products/:pid" component={} /> */}

        <Route path="/cart" component={Cart} />

        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={GetAllOffers} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<FallbackComp />}>
        {routes}
      </Suspense>
    </Layout>
  );
}

export default App;
