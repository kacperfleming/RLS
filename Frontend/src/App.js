import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Layout from "./layout";
import GetAllOffers from "./components/GetAllOffers";
import CreateOfferComponent from "./components/CreateOfferComponent";
import ViewOfferComponent from "./components/ViewOfferComponent";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={GetAllOffers} />
          <Route path="/add/:id" component={CreateOfferComponent} />
          <Route path="/viewDetails/:id" component={ViewOfferComponent} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
