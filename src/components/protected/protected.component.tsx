import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

import { Session } from "../../lib/redux/modules/user";
import { RootState } from "../../lib/redux";
import { config } from "../../lib";

const ProtectedRoute = ({
  component: Component,
  ...rest
}: any): React.ReactElement => {
  const session: Session = useSelector(
    (state: RootState) => state.runtime.session
  );
  console.log("session in protectedroute: ", session);
  return (
    <Route
      {...rest}
      render={props =>
        session.active == true ? (
          <Component {...props} />
        ) : (
          <Redirect to={config.routes.landing} />
        )
      }
    />
  );
};

export default ProtectedRoute;
