import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GetAllOffers from "./components/GetAllOffers";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateOfferComponent from "./components/CreateOfferComponent";
import ViewOfferComponent from "./components/ViewOfferComponent";

function App() {
  return (
    <div className="App">
        <Router>
            <HeaderComponent/>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={GetAllOffers}></Route>
                    <Route path="/add/:id" component={CreateOfferComponent}></Route>
                    <Route path = "/viewDetails/:id" component = {ViewOfferComponent}></Route>
                </Switch>
            </div>
            <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
