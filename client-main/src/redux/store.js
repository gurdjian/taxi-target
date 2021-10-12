import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import initState from "./initState";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))

// store.subscribe(() => {
//   window.localStorage.setItem('redux', JSON.stringify(store.getState()))
// })

export default store

