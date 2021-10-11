import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import DuneContextProvider from './components/TaxiContext/TaxiContext';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DuneContextProvider>
        <Router>
          <App />
        </Router>
      </DuneContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
