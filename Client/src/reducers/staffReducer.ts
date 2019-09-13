import * as types from "../constants/actionTypes";
const resetStaffInfo = {
    firstName: "",
    lastName: "",
    adhaarNumber: "",
    gender: "",
    dob: "",
    nationality: "",
    permanent_address: "",
    correspondance_address: ""

}
const defaultState = {
    info: resetStaffInfo,
    staffList: []
};

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case types.AUT_SYNC_NEW_STAFF: return Object.assign({}, state, action.state);
        case types.ADD_UPDATE_NEW_STAFF: return Object.assign({}, state);
        case types.GET_STAFF_LIST: return Object.assign({}, state, { staffList: action.data, info: resetStaffInfo  });
        case types.UPDATE_STAFF_DETAILS: { console.log("action.data", action.data); return Object.assign({}, state, { info: action.data }); }
        default:
            return state
    }
}