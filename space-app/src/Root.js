import React from 'react';
import { Router, Switch, Route } from 'react-router';

import { history } from './history';

import Login from './components/auth/login';
import Register from './components/auth/register';
import Space from './components/space';

import PrivateRoot from './PrivateRoute';

const Root = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/cadastro" component={Register}/>
      <PrivateRoot exact path="/" component={Space}/>
    </Switch>
  </Router>
)

export default Root;