import * as types from "../constants/actionTypes";

const defaultState = {
    info: null
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case types.POST_LOGIN: { return Object.assign({}, state, { info: action.data }); }
        case types.AUT_SYNC_CURRENT_USER: return Object.assign({}, state, action.state);
        default:
            return state
    }
}