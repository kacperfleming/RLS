import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";

import Layout from "./layout";
import FallbackComp from "./layout/FallbackComp";
import GetAllOffers from "./components/GetAllOffers";
import CreateOfferComponent from "./components/CreateOfferComponent";
import ViewOfferComponent from "./components/ViewOfferComponent";

const NewProductForm = lazy(() => import("./newProductForm/page/NewProductForm"));
const NewOfferForm = lazy(() => import("./newOfferForm/page/NewOfferForm"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<FallbackComp />}>
      
        <Switch>
          <Route path="/offers/new" component={NewOfferForm} />
          {/* <Route path="/offers/edit/:oid" component={} />
          <Route path="/offers/:oid" component={} /> */}

          <Route path="/products/new" component={NewProductForm} />
          {/* <Route path="/products/edit/:pid" component={} />
          <Route path="/products/:pid" component={} /> */}

          {/* <Route path="/viewDetails/:id" component={ViewOfferComponent} /> */}
          <Route path="/" exact component={GetAllOffers} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
