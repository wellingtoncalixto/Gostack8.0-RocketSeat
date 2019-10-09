import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form action="">
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu Email" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho Login</Link>
      </form>
    </>
  );
}
