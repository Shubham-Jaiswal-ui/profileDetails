import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import dataReducer from "./reducer/reducer";
import individualDataReducer from "./reducer/individualDataReducer";
import watcherSaga from "./saga/saga";

const reducer = combineReducers({
  dataReducer,
  individualDataReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
