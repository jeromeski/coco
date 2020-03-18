import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import thunk from 'redux-thunk';

import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';

const middlewares = [thunk]

const composedEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares)
);

const store = createStore(reducers, {}, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log('React Stripe key', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is', process.env.NODE_ENV)