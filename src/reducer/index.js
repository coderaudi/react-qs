/**
 * App Reducers
 */
import { combineReducers } from "redux";
import Appsettings from "./Appsettings";

import { LOGOUT_USER } from "../actions/types";

const appReducer = combineReducers({
  appSetting : Appsettings,

});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
