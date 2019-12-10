

import {
    DEFAULT_SETTING
  } from "../actions/types";

  /**
   * initial AppSetting State
   */
  const INIT_STATE = {
    AppDefaultData: null,

  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case DEFAULT_SETTING:
        return {
          ...state,

          AppDefaultData : action.payload
        };
  
      case "GET_RECENT_ACTIVITY":
        return {
          ...state,
        //   recentActivityListLoading: true,
        //   recentActivityList: []
        };
  
      default:
        return { ...state };
    }
  };
  