// import { NotificationManager } from "react-notifications";

// import {
//     ADD_POST,
//     ADD_POST_SUCCESS,
//     ADD_POST_FAILURE,
// } from "./types";

// import axios from "axios";
// import AppConfig from "../constants/AppConfig";




// export const addNewPost = (note) => dispatch => {
//       dispatch({ type: ADD_POST });
  
//        let data = note;

//        if(data.note){
//         dispatch({
//             type: ADD_POST_SUCCESS,
//             payload: data
//           });
//        }else{
//            let error = {
//                message : "fail to add note"
//            }
//         dispatch({ type: UPDATE_PROFILE_PICTURE_FAILURE, error: error });
//        }
        

//     //   axios
//     //     .post(
//     //       `${AppConfig.appUrl}/api/Registration/uploadAccountProfile`,
//     //       formData,
//     //       {
//     //         headers: {
//     //           "Content-Type": "application/json"
//     //         }
//     //       }
//     //     )
//     //     .then(response => {
//     //       if (response.data.errors)
//     //         NotificationManager.error(
//     //           "Something went wrong.Could not upload profile picture."
//     //         );
//     //       else NotificationManager.success("Profile Picture updated successfully");
//     //       dispatch({
//     //         type: UPDATE_PROFILE_PICTURE_SUCCESS,
//     //         payload: response.data
//     //       });
    
//     //       if (!response.data.errors) {
//     //         dispatch(getLoginUserDetails());
//     //       }
//     //     })
//     //     .catch(error => {
//     //       handleError(error);
//     //       dispatch({ type: UPDATE_PROFILE_PICTURE_FAILURE, error: error });
//     //     });
//     };
    









// // import { NotificationManager } from "react-notifications";
// // import {
// //   SET_ACCOUNT_DETAILS,
// //   SET_ACCOUNT_DETAILS_SUCCESS,
// //   SET_ACCOUNT_DETAILS_FAILURE,
// //   GET_ACCOUNT_DETAILS,
// //   GET_ACCOUNT_DETAILS_SUCCESS,
// //   GET_ACCOUNT_DETAILS_FAILURE,
// //   UPDATE_ACCOUNT_PASSWORD,
// //   UPDATE_ACCOUNT_PASSWORD_SUCCESS,
// //   UPDATE_ACCOUNT_PASSWORD_FAILURE,
// //   UPDATE_PROFILE_PICTURE,
// //   UPDATE_PROFILE_PICTURE_SUCCESS,
// //   UPDATE_PROFILE_PICTURE_FAILURE
// // } from "./types";

// // import axios from "axios";
// // import AppConfig from "../constants/AppConfig";

// // import { cleanEmptyProperties, handleError } from "../helpers/helpers";
// // import { getLoginUserDetails } from "../actions";

// // export const updateAccountPassword = data => dispatch => {
// //   dispatch({ type: UPDATE_ACCOUNT_PASSWORD });
// //   axios
// //     .put(
// //       `${AppConfig.appUrl}/api/Registration/changePassword`,
// //       cleanEmptyProperties(data),
// //       {
// //         headers: {
// //           "Content-Type": "application/json"
// //         }
// //       }
// //     )
// //     .then(response => {
// //       if (response.data.errors) NotificationManager.error(response.data.errors);
// //       else NotificationManager.success("Password Updated Successfully");
// //       dispatch({
// //         type: UPDATE_ACCOUNT_PASSWORD_SUCCESS,
// //         payload: response.data
// //       });
// //     })
// //     .catch(error => {
// //       handleError(error);
// //       dispatch({ type: UPDATE_ACCOUNT_PASSWORD_FAILURE, error: error });
// //     });
// // };

// // export const getAccountDetails = () => dispatch => {
// //   dispatch({ type: GET_ACCOUNT_DETAILS });
// //   axios
// //     .get(`${AppConfig.appUrl}/api/Registration/getAccount`, {
// //       headers: {
// //         "Content-Type": "application/json"
// //       }
// //     })
// //     .then(response => {
// //       dispatch({
// //         type: GET_ACCOUNT_DETAILS_SUCCESS,
// //         payload: response.data
// //       });
// //     })
// //     .catch(error => {
// //       handleError(error);
// //       dispatch({ type: GET_ACCOUNT_DETAILS_FAILURE, error: error });
// //     });
// // };

// // export const submitAccountDetails = data => dispatch => {
// //   dispatch({ type: SET_ACCOUNT_DETAILS });
// //   axios
// //     .put(`${AppConfig.appUrl}/api/Registration/saveAccount`, data, {
// //       headers: {
// //         "Content-Type": "application/json"
// //       }
// //     })
// //     .then(response => {
// //       dispatch({
// //         type: SET_ACCOUNT_DETAILS_SUCCESS,
// //         payload: response.data
// //       });
// //       NotificationManager.success("Updated Successfully");
// //       dispatch(getAccountDetails());
// //       dispatch(getLoginUserDetails());
// //     })
// //     .catch(error => {
// //       handleError(error);
// //       dispatch({ type: SET_ACCOUNT_DETAILS_FAILURE, error: error });
// //     });
// // };

// // export const updateProfilePicture = formData => dispatch => {
// //   dispatch({ type: UPDATE_PROFILE_PICTURE });
// //   axios
// //     .post(
// //       `${AppConfig.appUrl}/api/Registration/uploadAccountProfile`,
// //       formData,
// //       {
// //         headers: {
// //           "Content-Type": "application/json"
// //         }
// //       }
// //     )
// //     .then(response => {
// //       if (response.data.errors)
// //         NotificationManager.error(
// //           "Something went wrong.Could not upload profile picture."
// //         );
// //       else NotificationManager.success("Profile Picture updated successfully");
// //       dispatch({
// //         type: UPDATE_PROFILE_PICTURE_SUCCESS,
// //         payload: response.data
// //       });

// //       if (!response.data.errors) {
// //         dispatch(getLoginUserDetails());
// //       }
// //     })
// //     .catch(error => {
// //       handleError(error);
// //       dispatch({ type: UPDATE_PROFILE_PICTURE_FAILURE, error: error });
// //     });
// // };
