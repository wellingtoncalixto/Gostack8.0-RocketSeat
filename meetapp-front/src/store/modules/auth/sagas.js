import { takeLatest, put, call, all } from 'redux-saga/effects';
import api from '~/service/api';
import history from '~/service/history';
import { signInSuccess, updateMeetupSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  api.defaults.headers.Authorization = `Bearer ${token}`;

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  yield call(api.post, 'users', {
    name,
    email,
    password,
  });

  history.push('/');
}

export function* updateMeetup({ payload }) {
  const meetup = payload.data;
  console.tron.log(meetup);
  const { id } = meetup;

  const response = yield call(api.put, `meetup/${id}`, meetup);

  yield put(updateMeetupSuccess(response.data));

  history.push('/dashboard');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
