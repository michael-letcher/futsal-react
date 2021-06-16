import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginBox from './components/login';
import About from './pages/about';
import Admin from './pages/admin';
import Fixture from './pages/fixture';
import Home from './pages/home';
import Leagues from './pages/leagues';

export const AppUrls = {
  home: '/',
  login: '/login',
  signUp: '/sign-up',
  admin: '/admin',
  about: '/about',
  rules: '/rules',
  venues: '/venues',
  fixture: '/fixture',
  table: '/table',
};

function AppRouter() {
  return (
    <Switch>
      <Route path={AppUrls.home} exact component={Home} />
      <Route path={AppUrls.about} component={About} />
      <Route path={AppUrls.fixture} exact component={Fixture} />
      <Route path={AppUrls.fixture + '/:divId'} component={Fixture} />
      <Route path={AppUrls.table} component={Leagues} />
      <Route path={AppUrls.table + '/:divId'} component={Leagues} />

      <Route path={AppUrls.signUp} component={LoginBox} />
      <Route path={AppUrls.login} exact component={LoginBox} />
      <Route path={AppUrls.admin} exact component={Admin} />

      <Redirect to={AppUrls.login} />
    </Switch>
  );
}

export default AppRouter;
