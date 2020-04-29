import React from "react";
import { auth, UserInfo } from "firebase";

import "./landing.scss";
import { strings } from "../../res";

interface State {
  loading: boolean;
  user: UserInfo | null;
}
export default class Landing extends React.Component<any, State> {
  state: State = {
    loading: false,
    user: null
  };

  onLogin = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const provider = new auth.GoogleAuthProvider();
    auth()
      .signInWithPopup(provider)
      .then((result: any) => {
        const token = result.credential.accessToken;
        const user: UserInfo = result.user;
        console.log("user: ", user.displayName);
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
