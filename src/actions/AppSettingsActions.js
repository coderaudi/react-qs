

import {
    DEFAULT_SETTING
  } from "./types";



  export const getDefaultSetting = () => dispatch => {
    // dispatch({ type: DEFAULT_SETTING });
    
    let data = {
        def_name : "cd_test"
    }
    dispatch({ type: DEFAULT_SETTING, payload: data });

    // axios
    //   .get(`${AppConfig.appUrl}/api/OrderController/getActivityData`, {
    //     // params: cleanEmptyProperties(data)
    //   })
    //   .then(response => {
    //     dispatch({ type: GET_RECENT_ACTIVITY_SUCCESS, payload: response.data });
    //   })
    //   .catch(error => {
    //     handleError(error);
    //     dispatch({ type: GET_RECENT_ACTIVITY_FAILURE, error: error });
    //   });
  };