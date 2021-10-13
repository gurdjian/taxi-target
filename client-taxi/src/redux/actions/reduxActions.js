import { SET_POSITION } from '../types/allTypes';

export const setPositionAction = (value) => ({
  type: SET_POSITION,
  payload: value,
});
