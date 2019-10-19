import React from 'react';
import Appointments from '~/components/Appointments';

import {Container, Title, List} from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Container>
      <Title>Agendamentos</Title>
      <List
        data={data}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <Appointments data={item} />}
      />
    </Container>
  );
}
