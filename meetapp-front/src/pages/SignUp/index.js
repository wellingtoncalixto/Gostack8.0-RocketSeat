import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="" />

      <Form onSubmit={handleSubmit}>
        <Input name="name" type="Text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu Login" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Entrar</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
