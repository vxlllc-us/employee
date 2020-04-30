import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { config } from "../../lib";
import * as module from "./wrapper.module";
import { Landing } from "..";
import { store } from "../../lib";

export default class Wrapper extends React.Component {
  componentDidMount() {
    module.setup();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={config.routes.landing} component={Landing} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
