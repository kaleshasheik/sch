import * as types from "../constants/actionTypes";
const resetAllocationInfo = {
    idClass: 0,
    idSection: 0,
    idStaff: 0,
   
}
const defaultState = {
    info: resetAllocationInfo,
    allocationList: []
};

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case types.AUT_SYNC_NEW_CLASS_SECTION_STAFF: return Object.assign({}, state, action.state);
        case types.GET_ALLOCATION_LIST: return Object.assign({}, state, { allocationList: action.data, info: resetAllocationInfo  });
        default:
            return state
    }
}