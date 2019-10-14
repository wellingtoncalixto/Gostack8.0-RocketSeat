import React from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routes from './routes';

import './config/reactotronConfig';

import store from './store';

import GlobalStyle from './styles/global';

import history from './service/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;