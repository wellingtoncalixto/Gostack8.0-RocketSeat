import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MeetApp" />

      <aside>
        <div>
          <strong>Wellington Calixto</strong>
          <Link to="/Perfil">Meu Perfil</Link>
        </div>
        <button type="button">Sair</button>
      </aside>
    </Container>
  );
}
