import React from "react";
import * as types from "../constants/actionTypes";
import { GET_USER_TYPE } from "../constants/URL";
import { get } from "axios";
const getUserTypesList = () => {
  const _getUserTypes = get(GET_USER_TYPE);
  return dispatch => {
    return _getUserTypes
      .then(({ data }) => {
        let _list = data.data;
        _list.unshift({
          idUserType: -1,
          UserType: "Choose User Type"
        });
        return dispatch({ type: types.GET_USER_TYPE, data: _list });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };
};

export { getUserTypesList };
