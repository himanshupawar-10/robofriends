import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App'
import { searchRobots,requestRobots } from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
