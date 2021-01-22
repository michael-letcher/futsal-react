import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginBox from "./components/login";
import Home from "./pages/home";

export const AppUrls = {
  login: "/login",
  signUp: "/sign-up",
  home: "/",
};

function AppRouter() {
  return (
    <Switch>
      <Route path={AppUrls.home} render={() => <Home />} />
      {/* <Route
        path={AppUrls.signUp}
        render={(props) => <AdminSignupRoutes {...props} />}
      /> */}
      <Route path={AppUrls.login} exact render={(props) => <LoginBox />} />
      <Redirect to={AppUrls.login} />
    </Switch>
  );
}

export default AppRouter;
