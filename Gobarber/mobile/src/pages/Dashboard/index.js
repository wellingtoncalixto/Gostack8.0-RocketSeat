import React, {useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Appointments from '~/components/Appointments';

import api from '~/services/api';

import {Container, Title, List} from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState('');

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments');

      setAppointments(response.data);
    }
    loadAppointments();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }
  return (
    <Container>
      <Title>Agendamentos</Title>
      <List
        data={appointments}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Appointments onCancel={() => handleCancel(item.id)} data={item} />
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
