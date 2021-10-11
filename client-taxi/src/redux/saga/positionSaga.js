// eslint-disable-next-line import/no-extraneous-dependencies
import { takeEvery, call, put } from '@redux-saga/core/effects';
import axios from 'axios';
import { SET_POSITION, GET_POSITION, START_ROUTING } from '../types/allTypes';

function getPosition() {
  return axios.get('http://localhost:3100/current')
    .then((res) => res.data);
}

function startRouting() {
  return axios.get('http://localhost:3100/start')
    .then((res) => res.data);
}

function* startRoutingWorker(action) {
 
  try {
    
    const { position } = yield call(startRouting);
    yield put({
      type: SET_POSITION,
      payload: position,
    });
  } catch (error) {
    // yield put({
    //   type: SET_POSITION,
    //   payload: [55.75, 37.57],
    // });
  }
}

function* getPositionWorker(action) {
 
  try {
    const { position, status } = yield call(getPosition);
    console.log(`getPositionWorker position = ${position}, status = ${status}`);
    if (status !== 'stop') {
      yield put({
        type: SET_POSITION,
        payload: position,
      });
    }
  } catch (error) {
    // yield put({
    //   type: SET_POSITION,
    //   payload: [55.75, 37.57],
    // });
  }
}

function* positionWatcher() {
  yield takeEvery(GET_POSITION, getPositionWorker);
  yield takeEvery(START_ROUTING, startRoutingWorker);
}

export default positionWatcher;
