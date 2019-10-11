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
      <Route path="/Cadastrar" component={SignUp} />
      <Route path="/Dashboard" isPrivate component={Dashboard} />
      <Route path="/Perfil" isPrivate component={Perfil} />
      <Route path="/Detalhes" isPravate component={Detalhes} />
      <Route path="/Meetapp" isPrivate component={NovoEditar} />
    </Switch>
  );
}
