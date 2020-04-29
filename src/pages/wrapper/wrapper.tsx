import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { config } from "../../lib";
import * as module from "./wrapper.module";
import { Landing } from "..";

export default class Wrapper extends React.Component {
  componentDidMount() {
    module.setup();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={config.routes.landing} component={Landing} />
        </Switch>
      </Router>
    );
  }
}
