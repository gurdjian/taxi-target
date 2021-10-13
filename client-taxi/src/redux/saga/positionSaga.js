// eslint-disable-next-line import/no-extraneous-dependencies
import { takeEvery, call, all, put } from '@redux-saga/core/effects';
import axios from 'axios';
import { SET_POSITION, GET_POSITION, START_ROUTING, SET_RANGES, STOP_ROUTING, GET_RANGE } from '../types/allTypes';

function getPosition() {
  return axios.get('http://localhost:3100/current')
    .then((res) => res.data);
}

function getRange(coord) {
  return axios.post('http://localhost:3100/range', {coord})
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

function startRouting() {
  return axios.get('http://localhost:3100/start')
    .then((res) => res.data);
}

function stopRouting() {
  return axios.get('http://localhost:3100/stop')
    .then((res) => res.data);
}

function* startRoutingWorker(action) {
  try {
    const { position, ranges } = yield call(startRouting);
    yield all ([
      put({
        type: SET_POSITION,
        payload: position,
      }),
      put({
        type: SET_RANGES,
        payload: ranges,
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
}

function* stopRoutingWorker(action) {
  try {
    yield call(stopRouting);
  } catch (error) { 
    console.log(error);
   }
}

function* getPositionWorker(action) {
  try {
    const { position, status, ranges } = yield call(getPosition);
    console.log(`getPositionWorker position = ${position}, status = ${status}, ranges = ${ranges}`);
    if (status !== 'stop') {
      yield all ([
        put({
          type: SET_RANGES,
          payload: ranges,
        }),
        put({
          type: SET_POSITION,
          payload: position,
        }),
      ])
    } 
  } catch (error) {
    console.log(error);
    // yield put({
    //   type: SET_POSITION,
    //   payload: [55.75, 37.57],
    // });
  }
}

function* getRangeWorker(action) {
  try {
    const ranges = yield call(getRange, action.payload);
    console.log('getRangeWorker ', ranges);
    yield put({
      type: SET_RANGES,
      payload: ranges,
    })   
  } catch (error) {
    console.log(error);
    // yield put({
    //   type: SET_POSITION,
    //   payload: [55.75, 37.57],
    // });
  }
}

function* positionWatcher() {
  yield takeEvery(GET_RANGE, getRangeWorker);
  yield takeEvery(GET_POSITION, getPositionWorker);
  yield takeEvery(STOP_ROUTING, stopRoutingWorker);
  yield takeEvery(START_ROUTING, startRoutingWorker);
}

export default positionWatcher;
