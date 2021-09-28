import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { bindActionCreators, createStore } from 'redux';

import rootReducer, * as actions from './store/counter'
import { Provider } from 'react-redux';


const store = new createStore(rootReducer)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

