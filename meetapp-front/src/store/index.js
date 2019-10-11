import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleeware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleeware];

const store = createStore(rootReducer, middlewares);

sagaMiddleeware.run(rootSaga);

export default store;
