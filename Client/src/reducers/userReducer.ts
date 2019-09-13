import * as types from "../constants/actionTypes";
const resetUserInfo = {
    idUserType: -1,
    userName: "",
    emailId: "",
    password: "12345",
    status: false,
    mobileNumber: "",
    profileImage: null
}
const defaultState = {
    info: resetUserInfo,
    userList: []
};

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case types.AUT_SYNC_NEW_USER: return Object.assign({}, state, action.state);
        case types.ADD_UPDATE_NEW_USER: return Object.assign({}, state);
        case types.GET_USER_LIST: return Object.assign({}, state, { userList: action.data, info: resetUserInfo });
        case types.UPDATE_USERDETAILS: { console.log("action.data", action.data); return Object.assign({}, state, { info: action.data }); }
        default:
            return state
    }
}