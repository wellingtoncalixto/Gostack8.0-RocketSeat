import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard: {
              screen: Dashboard,
              navigationOptions: {
                tabBarLabel: 'Agendamentos',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="event" size={20} color={tintColor} />
                ),
              },
            },
            Profile: {
              screen: Profile,
              navigationOptions: {
                tabBarLabel: 'Perfil',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="person" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {backgroundColor: '#8d41a8'},
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
