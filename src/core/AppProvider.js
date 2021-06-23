import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

let store;

let thunkFake = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

export default function c({ children, reducers = {} }) {
  if (!store) {
    reducers = combineReducers(reducers);
    const composeEnhancers =
      typeof window === "object" &&
      window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
        ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
        : compose;

    store = createStore(reducers, composeEnhancers(applyMiddleware(thunkFake)));
  }

  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}
