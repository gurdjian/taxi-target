import {combineReducers} from 'redux'
import userReducer from './userReducer'
import allRangeReducer from './rangeReducer'

const rootReducer = combineReducers({
    user: userReducer,
    range: allRangeReducer,
})

export default rootReducer
