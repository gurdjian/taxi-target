import { SAGA_UPDATE_IMG, UPDATE_IMG, GET_POSITION, START_ROUTING, STOP_ROUTING} from '../types/allTypes';

export const updateUrlAction = (value) => ({
  type: UPDATE_IMG,
  payload: value,
});

export const updateUrlSaga = (value) => ({
  type: SAGA_UPDATE_IMG,
  payload: value,
});

export const getPositionSaga = (value) => ({
  type: GET_POSITION,
  payload: value,
});

export const startRouting = (value) => ({
  type: START_ROUTING,
  payload: value,
});

export const stopRouting = (value) => ({
  type: STOP_ROUTING,
  payload: value,
});
