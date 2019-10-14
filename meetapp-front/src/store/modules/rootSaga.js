import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* RootSaga() {
  return yield all([auth]);
}
