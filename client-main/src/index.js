import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios'

axios.defaults.baseURL=process.env.REACT_APP_URL
axios.defaults.withCredentials=true

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

