import React from "react";
import * as types from "../constants/actionTypes";
import {
  POST_USER_Details,
  GET_USER_LIST,
  GET_USER,
  EDIT_USER_Details,
  POST_LOGIN
} from "../constants/URL";
import { post, get } from "axios";
const getUserDetails = () => {
  return dispatch => {
    return dispatch({ type: types.ADD_UPDATE_NEW_USER });
  };
};
const autoSyncData = data => {
  console.log("data auto", data);
  return dispatch => {
    return dispatch({ type: types.AUT_SYNC_NEW_USER, state: data });
  };
};
const autoSyncCurrentUserData = data => {
  return dispatch => {
    return dispatch({ type: types.AUT_SYNC_CURRENT_USER, state: data });
  };
};
const postUserDetails = (data, mode) => {
  console.log("postUserDetails", data);
  const url = mode === "Add" ? POST_USER_Details : EDIT_USER_Details;
  const _postUserDetails = post(url, data);
  return dispatch => {
    return _postUserDetails
      .then(() => {
        return;
      })
      .catch(error => {
        console.log("Error", error);
      });
  };
};
const getAllUsers = () => {
  const _getUserList = get(GET_USER_LIST);
  return dispatch => {
    return _getUserList
      .then(({ data }) => {
        return dispatch({ type: types.GET_USER_LIST, data: data.data });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };
};
const getUserDetailsById = id => {
  const _getUserById = get(GET_USER + id);
  return dispatch => {
    return _getUserById
      .then(({ data }) => {
        console.log("data", data.data);
        return dispatch({ type: types.UPDATE_USERDETAILS, data: data.data });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };
};
const getCurrentUserDetailsById = id => {
  const _getUserById = get(GET_USER + id);
  return dispatch => {
    return _getUserById
      .then(({ data }) => {
        console.log("data", data.data);
        return dispatch({ type: types.POST_LOGIN, data: data.data });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };
};
const loginUser = data => {
  const _postCredentials = post(POST_LOGIN, data);
  return dispatch => {
    return _postCredentials
      .then(({ data }) => {
        console.log("data", data.data);
        return dispatch({ type: types.POST_LOGIN, data: data.data });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };
};
export {
  getUserDetails,
  autoSyncData,
  postUserDetails,
  getAllUsers,
  getUserDetailsById,
  loginUser,
  autoSyncCurrentUserData,
  getCurrentUserDetailsById
};
