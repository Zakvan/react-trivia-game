import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import apiSaga from "../sagas/api-saga";
import createSagaMiddleware from "redux-saga";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);
initialiseSagaMiddleware.run(apiSaga);
export default store;
