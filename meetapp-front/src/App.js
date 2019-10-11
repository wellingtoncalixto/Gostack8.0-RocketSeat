import React from 'react';

import { Provider } from 'react-redux';

import './config/reactotronConfig';

import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
