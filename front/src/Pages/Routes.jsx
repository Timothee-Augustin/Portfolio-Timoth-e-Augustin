import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Technologies from './Technologies';
import Clients from './Clients';
import Admin from './Admin';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Switch>
      {route('/', Home)}
      {route('/projects', Projects)}
      {route('/technologies', Technologies)}
      {route('/clients', Clients)}
      {route('/admin', Admin)}
    </Switch>
  );
}

export default Routes;
