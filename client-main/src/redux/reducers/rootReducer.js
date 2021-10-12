import {combineReducers} from 'redux'
import cabinetReducer from './cabinetReducer'
import userReducer from './userReducer'
<<<<<<< HEAD
import walletReducer from './walletReducer'

const rootReducer = combineReducers({
  user: userReducer,
  cabinet: cabinetReducer,
  wallet: walletReducer,
=======
import allRangeReducer from './rangeReducer'

const rootReducer = combineReducers({
    user: userReducer,
    range: allRangeReducer,
>>>>>>> 39956f05bc4eea499cb844fa66d9e029954c5c44
})

export default rootReducer
