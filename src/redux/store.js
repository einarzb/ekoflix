import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import movieReducer from "../redux/reducers/movieReducer";

const reducers = combineReducers({ movieReducer });

export default createStore(reducers, applyMiddleware(logger));
