import React from "react";
import * as types from "../constants/actionTypes";

import {
  POST_GENERAL_ENTRY_Details,
  GET_GENERAL_ENTRY_Details,
  GET_GENERAL_ENTRIES_LIST,
  GET_GENERAL_ENTRY
} from "../constants/URL";
import { post, get } from "axios";

const postData = state => {
  return dispatch => {
    return dispatch({ type: types.UPDATE_GENERAL_ENTRIES, state });
  };
};
const getDataByMenu = type => {
  switch (type) {
    case 1:
      return [
        {
          mediumName: "English"
        }
      ];
    case 2:
      return [
        {
          religionName: "Hindu"
        }
      ];
    case 3:
      return [
        {
          casteName: "Lingayat"
        }
      ];
    case 4:
      return [{ categoryName: "GM" }];

    case 5:
      return [
        {
          className: "1",
          classDescription: "First Standard",
          isPrimary: true ? "Yes" : "No"
        }
      ];
    case 6:
      return [{ sectionName: "A" }];
    case 7:
      return [{ subjectTypeName: "First Language" }];
    case 8:
      return [
        {
          subjectCode: "001",
          subjectName: "Kannada",
          subjectType: "First Language",
          medium: "English"
        }
      ];
    default:
      return null;
  }
};
const getColumns = type => {
  switch (type) {
    case 1:
      return [
        {
          name: "slNo",
          label: "#",
          options: {
            filter: false,
            sort: false
          }
        },
        {
          name: "mediumName",
          label: "Medium Name",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "actions",
          label: "Actions",
          options: {
            filter: false,
            sort: false
          }
        }
      ];
    case 2:
      return [
        {
          name: "slNo",
          label: "#",
          options: {
            filter: false,
            sort: false
          }
        },
        {
          name: "religionName",
          label: "Name",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "actions",
          label: "Actions",
          options: {
            filter: false,
            sort: false
          }
        }
      ];
    case 3:
      return [
        {
          name: "slNo",
          label: "#",
          options: {
            filter: false,
            sort: false
          }
        },
        {
          name: "casteName",
          label: "Name",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "actions",
          label: "Actions",
          options: {
            filter: false,
            sort: false
          }
        }
      ];
    case 4:
      return [
        {
          name: "slNo",
          label: "#",
          options: {
            filter: false,
            sort: false
          }
        },
        {
          name: "categoryName",
          label: "Name",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "actions",
          label: "Actions",
          options: {
            filter: false,
            sort: false
          }
        }
      ];
    case 5:
      return [
        {
          name: "slNo",
          label: "#",
          options: {
            filter: false,
            sort: false
          }
        },
        {
          name: "className",
          label: "Name",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "classDescription",
          label: "Description",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "isPrimary",
          label: "Primary",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "actions",
          label: "Actions",
          options: {
            filter: false,
            sort: false
          }
        }
      ];
    case 6:
      return [
        {
          name: "slNo",
          label: "#",
          options: {
            filter: false,
            sort: false
          }
        },
        {
          name: "sectionName",
          label: "Name",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "actions",
          label: "Actions",
          options: {
            filter: false,
            sort: false
          }
        }
      ];
    case 7:
      return [
        {
          name: "slNo",
          label: "#",
          options: {
            filter: false,
            sort: false
          }
        },
        {
          name: "subjectTypeName",
          label: "Subject Type Name",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "actions",
          label: "Actions",
          options: {
            filter: false,
            sort: false
          }
        }
      ];
    case 8:
      return [
        {
          name: "slNo",
          label: "#",
          options: {
            filter: false,
            sort: false
          }
        },
        {
          name: "subjectCode",
          label: "Subject Code",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "subjectName",
          label: "Subject Name",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "subjectType",
          label: "Subject Type",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "medium",
          label: "Medium",
          options: {
            filter: true,
            sort: true
          }
        },
        {
          name: "actions",
          label: "Actions",
          options: {
            filter: false,
            sort: false
          }
        }
      ];
    default:
      return null;
  }
};
const getData = type => {
  const data = getDataByMenu(type);
  const columns = getColumns(type);
  return dispatch => {
    return dispatch({ type: types.GET_GENERAL_ENTRIES, data, columns });
  };
};
const postAPIData = data => {
  return dispatch => {
    return new Promise((resolve, reject) => resolve({}));
  };
};




const autoSyncData = data => {
    console.log("data auto", data);
    return dispatch => {
        return dispatch({ type: types.AUT_SYNC_GENERAL_ENTRIES, state: data });
    };
};

const postGeneralEntryDetails = (data, type, mode) => {
    
    const url = mode === "Add" ? POST_GENERAL_ENTRY_Details : GET_GENERAL_ENTRY_Details;
    console.log("postGeneralEntryDetails", url,mode, type,   data);
    let input = Object.assign({}, data, {type: type})
    const _postGeneralEntryDetails = post(url, input);
    return dispatch => {
        return _postGeneralEntryDetails
            .then(() => {
                return;
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
};
const getAllGeneralentries = () => {
    const _getGeneralEntriesList = get(GET_GENERAL_ENTRIES_LIST);
    return dispatch => {
        return _getGeneralEntriesList
            .then(({ data }) => {
              console.log('allgeneral entries ', data)

                return dispatch({ type: types.GET_GENERAL_ENTRIES_LIST, data: data.data });
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
};
const getGeneralEntryById = id => {
    const _getGeneralEntryById = get(GET_GENERAL_ENTRY + id);
    return dispatch => {
        return _getGeneralEntryById
            .then(({ data }) => {
                console.log("data", data.data);
                return dispatch({ type: types.UPDATE_GENERAL_ENTRIES, data: data.data });
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
};


export { postData, getData, postAPIData, getGeneralEntryById, getAllGeneralentries, autoSyncData, postGeneralEntryDetails  };
