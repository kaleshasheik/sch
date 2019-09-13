import React from "react";
import * as types from "../constants/actionTypes";
import {
    POST_STAFF_Details,
    GET_STAFF_LIST,
    GET_STAFF,
    EDIT_STAFF_Details
} from "../constants/URL";
import { post, get } from "axios";

const getStaffDetails = () => {
    return dispatch => {
        return dispatch({ type: types.ADD_UPDATE_NEW_STAFF });
    };
};
const autoSyncData = data => {
    console.log("data auto", data);
    return dispatch => {
        return dispatch({ type: types.AUT_SYNC_NEW_STAFF, state: data });
    };
};

const postStaffDetails = (data, mode) => {
    
    const url = mode === "add" ? POST_STAFF_Details : EDIT_STAFF_Details;
    console.log("postStaffDetails", url,mode,  data);
    const _postStaffDetails = post(url, data);
    return dispatch => {
        return _postStaffDetails
            .then(() => {
                return;
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
};
const getAllStaffDetails = () => {
    const _getStaffList = get(GET_STAFF_LIST);
    return dispatch => {
        return _getStaffList
            .then(({ data }) => {
                return dispatch({ type: types.GET_STAFF_LIST, data: data.data });
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
};
const getStaffDetailsById = id => {
    const _getStaffById = get(GET_STAFF + id);
    return dispatch => {
        return _getStaffById
            .then(({ data }) => {
                console.log("data", data.data);
                return dispatch({ type: types.UPDATE_STAFF_DETAILS, data: data.data });
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
};


export {
    getStaffDetails,
    autoSyncData,
    postStaffDetails,
    getAllStaffDetails,
    getStaffDetailsById
};
