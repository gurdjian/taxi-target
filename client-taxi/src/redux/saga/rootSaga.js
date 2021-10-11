import { all } from 'redux-saga/effects';
import positionWatcher from './positionSaga';
import urlWatcher from './urlSaga';

export default function* rootSaga() {
  yield all([
    urlWatcher(),
    positionWatcher(),
  ]);
}
