import React from "react";
import * as types from "../constants/actionTypes";
import {
    POST_ACADEMIC_YEAR_Details,
    GET_ACADEMIC_YEAR_LIST,
    GET_ACADEMIC_YEAR,
    EDIT_ACADEMIC_YEAR_Details
} from "../constants/URL";
import { post, get } from "axios";


const autoSyncData = data => {
    console.log("data auto", data);
    return dispatch => {
        return dispatch({ type: types.AUT_SYNC_NEW_ACADEMIC_YEAR, state: data });
    };
};

const postAcademicYearDetails = (data, mode) => {
    
    const url = mode === "add" ? POST_ACADEMIC_YEAR_Details : EDIT_ACADEMIC_YEAR_Details;
    console.log("postAcademicYearDetails", url,mode,  data);
    const _postAcademicYearDetails = post(url, data);
    return dispatch => {
        return _postAcademicYearDetails
            .then(() => {
                return;
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
};
const getAllAcademicYearDetails = () => {
    const _getAcademicYearList = get(GET_ACADEMIC_YEAR_LIST);
    return dispatch => {
        return _getAcademicYearList
            .then(({ data }) => {
                return dispatch({ type: types.GET_ACADEMIC_YEAR_LIST, data: data.data });
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
};
const getAcademicYearDetailsById = id => {
    const _getAcademicYearById = get(GET_ACADEMIC_YEAR + id);
    return dispatch => {
        return _getAcademicYearById
            .then(({ data }) => {
                console.log("data", data.data);
                return dispatch({ type: types.UPDATE_ACADEMIC_YEAR_DETAILS, data: data.data });
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
};


export {
    
    autoSyncData,
    postAcademicYearDetails,
    getAllAcademicYearDetails,
    getAcademicYearDetailsById
};
