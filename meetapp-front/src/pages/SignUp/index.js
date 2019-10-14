import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';

import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string()
    .min(6)
    .required('A senha é obrigatoria'),
});
export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="Text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu Login" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Entrar</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
