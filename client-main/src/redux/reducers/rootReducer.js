import {combineReducers} from 'redux'
import cabinetReducer from './cabinetReducer'
import userReducer from './userReducer'
import walletReducer from './walletReducer'

const rootReducer = combineReducers({
  user: userReducer,
  cabinet: cabinetReducer,
  wallet: walletReducer,
  // range: allRangeReducer,
})

export default rootReducer
