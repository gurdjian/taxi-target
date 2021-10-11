// eslint-disable-next-line import/no-extraneous-dependencies
import { takeEvery, call, all, put } from '@redux-saga/core/effects';
import axios from 'axios';
import { SET_POSITION, GET_POSITION, START_ROUTING, SET_RANGES, STOP_ROUTING } from '../types/allTypes';

function getPosition() {
  return axios.get('http://localhost:3100/current')
    .then((res) => res.data);
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
    
  }
}

function* stopRoutingWorker(action) {
 
  try {
    
    const { position, ranges } = yield call(stopRouting);
    yield all ([
      put({
        type: SET_RANGES,
        payload: [],
      }),
    ]);
  } catch (error) {
    
  }
}

function* getPositionWorker(action) {
 
  try {
    const { position, status, ranges } = yield call(getPosition);
    // console.log(`getPositionWorker position = ${position}, status = ${status}`);
    if (status !== 'stop') {
      yield all ([
        put({
          type: SET_POSITION,
          payload: position,
        }),
        put({
          type: SET_RANGES,
          payload: ranges,
        }),
      ])

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
  yield takeEvery(STOP_ROUTING, stopRoutingWorker);
  yield takeEvery(START_ROUTING, startRoutingWorker);
}

export default positionWatcher;
