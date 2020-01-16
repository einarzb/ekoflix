import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import heroReducer from "../redux/reducers/heroReducer";

const reducers = combineReducers({ heroReducer });

export default createStore(reducers, applyMiddleware(logger));
