import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import { createStore, applyMiddleware } from 'redux'


import reducers from "./reducers";
import thunk from 'redux-thunk';

import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';

const middlewares = [thunk]


const store = createStore(reducers, {}, applyMiddleware(middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
