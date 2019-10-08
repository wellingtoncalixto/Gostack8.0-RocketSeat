import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact compnent={SingIn} />
      <Route path="/register" compnent={SingUp} />
      <Route path="/dashboard" compnent={Dashboard} />
      <Route path="/profile" compnent={Profile} />
    </Switch>
  );
}
