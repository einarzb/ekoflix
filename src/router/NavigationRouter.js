import React, { Component } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { asyncComponent } from "react-async-component";

import NavBar from "../components/NavBar";

const Home = asyncComponent({
  resolve: () => import("../screens/MainScreen")
});

class NavigationRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default NavigationRouter;
