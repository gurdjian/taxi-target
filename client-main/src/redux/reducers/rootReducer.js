import {combineReducers} from 'redux'
import cabinetReducer from './cabinetReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  cabinet: cabinetReducer
})

export default rootReducer
