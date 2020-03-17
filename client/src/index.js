import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';

const middlewares = [reduxThunk]

const composedEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares)
);

const store = createStore(() => reducers, {}, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
