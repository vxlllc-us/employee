import React from "react";

import "./home.scss";
import { strings } from "../../res";

export default () => {
  return (
    <div className="home-root">
      <div className="container">
        <div className="login-container">
          <div className="logo-container"></div>
          <div className="button">
            <div className="google-logo-container"></div>
            <div className="text-container">
              <span>{strings.home.s1}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
