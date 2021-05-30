import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import App from "./app";
import LoginBox from './components/login';
import About from './pages/about';
import Admin from './pages/admin';
import Home from './pages/home';
import Leagues from './pages/leagues';

export const AppUrls = {
  home: '/',
  login: '/login',
  signUp: '/sign-up',
  admin: '/admin',
  about: '/about',
  venues: '/venues',
  matches: '/matches',
};

function AppRouter() {
  return (
    <Switch>
      <Route path={AppUrls.home} exact component={Home} />
      <Route path={AppUrls.about} component={About} />
      <Route path={AppUrls.matches} exact component={Leagues} />
      <Route path={AppUrls.matches + '/:divId'} component={Leagues} />
      <Route path={AppUrls.matches + '/:divId'} component={Leagues} />
      <Route path={AppUrls.matches + '/:divId/fixture'} component={Leagues} />
      <Route path={AppUrls.matches + '/:divId/table'} component={Leagues} />

      <Route path={AppUrls.signUp} component={LoginBox} />
      <Route path={AppUrls.login} exact component={LoginBox} />
      <Route path={AppUrls.admin} exact component={Admin} />

      <Redirect to={AppUrls.login} />
    </Switch>
  );
}

export default AppRouter;
