import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import Background from '~/components/Background';
// import { Container } from './styles';

export default function Confirm() {
  return <Background />;
}

Confirm.navigationOptions = ({navigation}) => ({
  title: 'Confirmar',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboar');
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
