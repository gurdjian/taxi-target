/* eslint-disable max-len */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import initState from './initState';
import rootReducer from './reducers/rootReducer';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export default store;
