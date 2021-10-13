import {combineReducers} from 'redux'
import cabinetReducer from './cabinetReducer'
import allRangeReducer from './rangeReducer'
import userReducer from './userReducer'
import walletReducer from './walletReducer'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
  user: userReducer,
  cabinet: cabinetReducer,
  wallet: walletReducer,
  range: allRangeReducer,
  advertisement: adminReducer
})

export default rootReducer
