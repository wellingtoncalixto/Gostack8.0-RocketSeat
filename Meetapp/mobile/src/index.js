import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import Background from '~/components/Background';

import '~/config/ReactotronConfig';

import Routes from './routes';

import App from './App';

import {store, persistor} from './store';

export default function Ap() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Background>
          <StatusBar barStyle="light-content" backgroundColor="#22202C" />
          <App />
          <Routes />
        </Background>
      </PersistGate>
    </Provider>
  );
}
