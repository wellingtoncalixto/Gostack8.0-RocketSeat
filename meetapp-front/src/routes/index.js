import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Perfil from '../pages/Perfil';
import Detalhes from '../pages/Detalhes';
import NovoEditar from '../pages/Novo-Editar';

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/cadastrar" component={SignUp} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/Perfil" isPrivate component={Perfil} />
      <Route path="/detalhes" isPrivate component={Detalhes} />
      <Route path="/meetapp" isPrivate component={NovoEditar} />
    </Switch>
  );
}
