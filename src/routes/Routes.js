import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";
import PrivateRoute from "./PrivateRoute";

//Pages
const WelcomePage = lazy(() => import("../pages/HomePage"));
const SecretPage = lazy(() => import("../pages/SecretPage"));
const NoMatchPage = lazy(() => import("../pages/NoMatchPage"));
const NotAllowedPage = lazy(() => import("../pages/NotAllowedPage"));

export const RoutePaths = {
  HOME: "/",
  SECRET: "/secret",
  NOMATCH: "/404",
  NOTALLOWED: "/401"
};

const Routes = () => {
  return (
    <Suspense
      fallback={
        <Dimmer active>
          <Loader />
        </Dimmer>
      }
    >
      <Switch>
        <Route exact path={RoutePaths.HOME} component={WelcomePage} />
        <PrivateRoute path={RoutePaths.SECRET} component={SecretPage} />
        <Route path={RoutePaths.NOTALLOWED} component={NotAllowedPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;