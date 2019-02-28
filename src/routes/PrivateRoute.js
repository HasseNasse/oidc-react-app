import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../context/ContextProvider";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <AppContext.Consumer>
    {({ isAuthenticated }) => (
      <Route
        {...rest}
        render={props =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/401" />
          )
        }
      />
    )}
  </AppContext.Consumer>
);

export default PrivateRoute;