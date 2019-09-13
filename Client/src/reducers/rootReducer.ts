import { combineReducers } from 'redux';
import generalEntriesReducer from './generalEntriesReducer';
import userReducer from './userReducer';
import commonReducer from './commonReducer';
import currentUserReducer from './currentUserReducer'
import staffReducer from './staffReducer'
import academicYearReducer from './academicYearReducer'
import allocationReducer from './allocationReducer'
export default combineReducers({
    generalEntries: generalEntriesReducer,
    userDetails: userReducer,
    commonData: commonReducer,
    currentUserDetails: currentUserReducer,
    staffDetails: staffReducer,
    academicDetails: academicYearReducer,
    classSectionStaffDetails: allocationReducer
});