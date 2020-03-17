import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import App from "./components/App";
import reducers from "./reducers";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(() => reducers, {}, (applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
