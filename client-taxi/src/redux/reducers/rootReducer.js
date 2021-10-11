import { combineReducers } from 'redux';
import positionReducer from './positionReducer';
import rangeReducer from './rangeReducer';
import statusReducer from './statusReducer';
import urlReducer from './urlReducer';

const rootReducer = combineReducers({
  ads: urlReducer,
  position: positionReducer,
  status: statusReducer,
  ranges: rangeReducer,
});

export default rootReducer;
