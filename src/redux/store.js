import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import heroReducer from "../redux/reducers/heroReducer";
import playlistsReducer from "../redux/reducers/playlistsReducer";

const reducers = combineReducers({ heroReducer, playlistsReducer });

export default createStore(reducers, applyMiddleware(logger));
