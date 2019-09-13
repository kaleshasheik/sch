import * as types from "../constants/actionTypes";
const resetAcademicInfo = {
    academicYearName: "",
    ledgerNumber: "",
    from: "",
    to: ""
   

}
const defaultState = {
    info: resetAcademicInfo,
    academicYearList: []
};

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case types.AUT_SYNC_NEW_ACADEMIC_YEAR: return Object.assign({}, state, action.state);
        case types.ADD_UPDATE_NEW_ACADEMIC_YEAR: return Object.assign({}, state);
        case types.GET_ACADEMIC_YEAR_LIST: return Object.assign({}, state, { academicYearList: action.data, info: resetAcademicInfo  });
        case types.UPDATE_ACADEMIC_YEAR_DETAILS: { console.log("action.data", action.data); return Object.assign({}, state, { info: action.data }); }
        default:
            return state
    }
}