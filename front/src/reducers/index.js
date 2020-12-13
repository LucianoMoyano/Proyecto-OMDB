import { combineReducers } from "redux";
import loginReducers from "./login-reducers";
import moviesReducers from "./movies-reducers";

export default combineReducers({
  moviesReducers,
  loginReducers,
});


 