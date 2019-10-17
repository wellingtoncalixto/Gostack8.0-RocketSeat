import React from 'react';
import {StatusBar} from 'react-native';

import Background from '~/components/Background';
import Routes from './routes';
// import { Container } from './styles';

export default function App() {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </Background>
  );
}
