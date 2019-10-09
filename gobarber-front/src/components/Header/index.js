import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logoHeader from '~/assets/logoHeader.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoHeader} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Wellington Calixto</strong>
              <Link to="/profile">Meu Peril</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable"
              alt="Wellington Calixto"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
