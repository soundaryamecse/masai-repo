import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {authReducer} from "./reducers/authReducer";

const rootReducer = combineReducers({ auth: authReducer});

const logger = (store) => (next) => (action) => {
  console.log("logger 1 dispatching action:", action);
  console.log("store", store);
  return next(action);
};

const thunk = (args) => ({ getState, dispatch }) => (next) => (action) => {
  console.log("inside thunk");
  if (typeof action === "function") {
    return action(dispatch, getState, args);
  }
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk(), logger))
);

console.log("entered in store", store.getState());

// be careful when you use with combineReducers
// store.subscribe(throttle(() => saveData("state", store.getState()), 1000));