import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const dispath = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispath(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova Senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
