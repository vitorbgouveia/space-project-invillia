import React from 'react';
import { Route, Redirect } from 'react-router';
import { isLogged } from './apis/auth';

const PrivateRoot = props => isLogged()
  ? <Route {...props}/>
  : <Redirect to="/login"/>

export default PrivateRoot;
