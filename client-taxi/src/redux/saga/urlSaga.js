// eslint-disable-next-line import/no-extraneous-dependencies
import { takeEvery, call, put } from '@redux-saga/core/effects';
import axios from 'axios';
import { UPDATE_IMG, SAGA_UPDATE_IMG } from '../types/allTypes';

function getUrl() {
  return axios.get('http://localhost:3100')
    .then((res) => res.data);
}

function* getUrlWorker(action) {
 
  try {
    const ads = yield call(getUrl);
    console.log('getUrlWorker url', ads);
    yield put({
      type: UPDATE_IMG,
      payload: ads,
    });
  } catch (error) {
    yield put({
      type: UPDATE_IMG,
      payload: 'https://st2.depositphotos.com/2673929/6455/i/950/depositphotos_64556341-stock-photo-404-symbol.jpg',
    });
  }
}

function* urlWatcher() {
  yield takeEvery(SAGA_UPDATE_IMG, getUrlWorker);
}

export default urlWatcher;
