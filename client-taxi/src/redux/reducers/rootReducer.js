import { combineReducers } from 'redux';
import positionReducer from './positionReducer';
import statusReducer from './statusReducer';
import urlReducer from './urlReducer';

const rootReducer = combineReducers({
  ads: urlReducer,
  position: positionReducer,
  status: statusReducer,
});

export default rootReducer;
