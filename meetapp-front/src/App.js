import React from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/reactotronConfig';
import Routes from './routes';
import GlobalStyle from './styles/global';

import history from './service/history';

import store from './store';

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
