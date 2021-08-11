import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";

import Layout from "./layout";
import GetAllOffers from "./components/GetAllOffers";
import CreateOfferComponent from "./components/CreateOfferComponent";
import ViewOfferComponent from "./components/ViewOfferComponent";

const NewProductForm = lazy(() => import("./newOffert/page/NewProductForm"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path="/offers/new" component={CreateOfferComponent} />
            <Route path="/products/new" component={NewProductForm} />
            <Route path="/viewDetails/:id" component={ViewOfferComponent} />
            <Route path="/" exact component={GetAllOffers} />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
