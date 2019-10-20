import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectProvider() {
  return <Background />;
}

SelectProvider.navigationOptions = ({navigation}) => ({
  title: 'Escolha o Prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
