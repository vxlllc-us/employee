import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ScaleLoader } from "react-spinners";

import { config } from "../../lib";
import * as module from "./wrapper.module";
import { Landing, Home } from "..";
import { store } from "../../lib";
import { ProtectedRoute } from "../../components";
import { theme } from "../../res";
import "./wrapper.scss";

interface IState {
  loading: boolean;
}
export default class Wrapper extends React.Component<any, IState> {
  state: IState = {
    loading: true
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });
    await module.setup();
    await module.sessionListener();
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="wrapper-root">
          <ScaleLoader
            color={theme.secondary}
            height={12}
            width={4}
            radius={2}
            margin={2}
          />
        </div>
      );
    }
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={config.routes.landing} component={Landing} />
            <ProtectedRoute exact path={config.routes.home} component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
