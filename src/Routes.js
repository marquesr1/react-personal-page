import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./Pages/Main/App";
import Config from "./Pages/Config";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/cfg" component={Config} />
        </Switch>
      </BrowserRouter>
    );
  }
}
