import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string()
    .min(6, 'A senha precisa de no minimo 6 caracteres')
    .required('A senha é obrigatoria'),
});

export default function SingUp() {
  const dispath = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispath(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu Email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Aguarde...' : 'Criar Conta'}</button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
