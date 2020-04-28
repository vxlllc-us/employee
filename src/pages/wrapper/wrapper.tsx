import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { config } from "../../lib";
import { Home } from "..";

export default class Wrapper extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={config.routes.home} component={Home} />
        </Switch>
      </Router>
    );
  }
}
