import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'gobarber',
      storage,
      whiteList: ['auth', 'user'],
    },
    reducers
  );
  return persistedReducers;
};
