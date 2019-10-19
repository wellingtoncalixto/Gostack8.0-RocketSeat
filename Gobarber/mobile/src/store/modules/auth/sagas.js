import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
// import history from '~/services/history';
import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    api.defaults.headers.Authorization = `Bearer ${payload.token}`;
    const {token, user} = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'Se voce for um prestador de serviços usar o site '
      );
      return;
    }

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Erro na authenticação',
      'Falha na autenticação, verifique os seus dados'
    );
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, email, password} = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    // history.push('/');
  } catch (err) {
    Alert.alert(
      'Erro no cadastro',
      'Falha no cadasto, verifique os seus dados'
    );

    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload || !payload.auth);
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
