import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import  reducer  from "./Redux/reducer";
import {thunk} from "redux-thunk";

const store = legacy_createStore(reducer, applyMiddleware(thunk));
export default store;
