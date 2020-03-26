import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import Cases from './Cases';

export default function Routes() {
  return (<BrowserRouter>
    <Switch>
      <Route path="/" exact component={UserLogin}/>
      <Route path="/register" component={UserRegister}/>
      <Route path="/dashboard" component={Cases}/>
    </Switch>
  </BrowserRouter>)
}
