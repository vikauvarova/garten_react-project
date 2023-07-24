import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/main.scss"
import App from "./App";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

const composeEn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer, composeEn(applyMiddleware(thunk)));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);