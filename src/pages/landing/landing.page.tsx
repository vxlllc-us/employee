import React from "react";
import { auth, UserInfo } from "firebase";
import { connect, ConnectedProps } from "react-redux";

import "./landing.scss";
import { strings } from "../../res";
import { setSession } from "../../lib";
import { RootState } from "../../lib/redux";
import { Session } from "../../lib/redux/modules/user";
import * as module from "./landing.module";

interface State {
  loading: boolean;
  user: UserInfo | null;
}
class Landing extends React.Component<PropsFromRedux, State> {
  state: State = {
    loading: false,
    user: null
  };

  componentDidMount() {
    module.sessionListener();
  }

  onLogin = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const provider = new auth.GoogleAuthProvider();
    auth()
      .signInWithPopup(provider)
      .then((result: any) => {
        const token = result.credential.accessToken;
        const user: UserInfo = result.user;
        this.props.setSession({
          active: true,
          user
        });
        this.setState({
          loading: false,
          user
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        this.setState({
          loading: false
        });
      });
  };

  render() {
    return (
      <div className="home-root">
        <div className="container">
          <div className="login-container">
            <div className="logo-container"></div>
            <div onClick={this.onLogin} className="button">
              <div className="google-logo-container"></div>
              <div className="text-container">
                <span>{strings.home.s1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): RootState => {
  return state;
};

const mapDispatchToProps = {
  setSession: (session: Session) => setSession(session)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Landing);
