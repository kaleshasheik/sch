import * as types from "../constants/actionTypes";
const defaultState = {
    medium: {
        mediumName: ""
    },
    religion: {
        religionName: ""
    },
    caste: {
        casteName: ""
    },
    category: {
        categoryName: ""
    },
    class: {
        className: "",
        description: "",
        isPrimary: false
    },
    section: {
        sectionName: ""
    },
    subjectType: {
        subjectTypeName: ""
    },
    subject: {
        subjectCode: "",
        subjectName: "",
        idSubjectType: -1,
        idMedium: -1
    },
    columns: [],
    dataSource: []
}
export default (state = defaultState, action: any) => {
    console.log('action type', action.type)
    switch (action.type) {
        
        case types.AUT_SYNC_GENERAL_ENTRIES: return Object.assign({}, state, action.state);
        case types.ADD_UPDATE_GENERAL_ENTRIES: return Object.assign({}, state);
        case types.UPDATE_GENERAL_ENTRIES: return Object.assign({}, state, action.state);
        case types.GET_GENERAL_ENTRIES: return Object.assign({}, state, { dataSource: action.data, columns: action.columns });
        case types.GET_GENERAL_ENTRIES_LIST: return Object.assign({}, state, { dataSource: action.data, columns: action.columns });
        default:
            return state
    }
}