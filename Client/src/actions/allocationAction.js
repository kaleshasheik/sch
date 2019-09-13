import React from "react";
import * as types from "../constants/actionTypes";
import {
    GET_ALLOCATION_LIST,
    POST_ALLOCATE_CLASS_SECTION,
    EDIT_ALLOCATE_CLASS_SECTION,
    POST_ALLOCATE_CLASS_SECTION_SUBJECT,
    POST_ALLOCATE_CLASS_SECTION_STAFF,
    EDIT_ALLOCATE_CLASS_SECTION_STAFF,
    EDIT_ALLOCATE_CLASS_SECTION_SUBJECT
    
} from "../constants/URL";
import { post, get } from "axios";




const autoSyncData = data => {
    console.log("data auto", data);
    return dispatch => {
        return dispatch({ type: types.AUT_SYNC_NEW_CLASS_SECTION_STAFF, state: data });
    };
};



const postAllocationDetails = (data, mode, step) => {
    
    //let url = mode === "add" ? POST_ACADEMIC_YEAR_Details : EDIT_ACADEMIC_YEAR_Details;
    let url ;
    switch(step){

        case 1:{
                 url = mode === "add" ? POST_ALLOCATE_CLASS_SECTION : EDIT_ALLOCATE_CLASS_SECTION;
               } 
        case 2:{
                url = mode === "add" ? POST_ALLOCATE_CLASS_SECTION_SUBJECT : EDIT_ALLOCATE_CLASS_SECTION_SUBJECT;
               } 
        case 3: {
               url = mode === "add" ? POST_ALLOCATE_CLASS_SECTION_STAFF : EDIT_ALLOCATE_CLASS_SECTION_STAFF;
              }
          default: 
               url = null    
        }              

    
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


const getAllAllocationDetails = () => {
    const _getAllAllocationDetails = get(GET_ALLOCATION_LIST);
    return dispatch => {
        return _getAllAllocationDetails
            .then(({ data }) => {
                console.log('getAllAllocationDetails ', data)
                return dispatch({ type: types.GET_ALLOCATION_LIST, data: data.data });
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
};


export {
    autoSyncData,postAllocationDetails,getAllAllocationDetails
}