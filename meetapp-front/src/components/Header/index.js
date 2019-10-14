import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '~/assets/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <img src={logo} alt="MeetApp" />

      <aside>
        <div>
          <strong>Wellington Calixto</strong>
          <Link to="/Perfil">Meu Perfil</Link>
        </div>
        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
      </aside>
    </Container>
  );
}
