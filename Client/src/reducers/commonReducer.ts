import * as types from "../constants/actionTypes";
const defaultState = {
    userTypesList: []
};

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case types.GET_USER_TYPE: return Object.assign({}, state, { userTypesList: action.data });
        default:
            return state
    }
}