import React from 'react';

import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Left, Info, Avatar, Name, Time} from './styles';

export default function Appointments() {
  return (
    <Container>
      <Left>
        <Avatar source={{uri: 'http://api.adorable.io/avatar/50/teste.png'}} />
        <Info>
          <Name>Wellington Augusto</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
