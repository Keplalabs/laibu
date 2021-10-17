import {
  SET_UNITS,
  SET_COURSES,
  SET_RECENT_UNITS,
  SET_RECENT_FILES,
} from "./dataTypes";
import { getLocalData, setLocalData } from "../../utils/helpers";
import { api } from "../../utils/urls";
import axios from "axios";
import {
  COURSES,
  CURRENT_SEMESTER_UNITS,
  RECENT_FILES,
  UNITS,
} from "../../utils/constants";
import { showAlert } from "../alert";

export function setUnits(units) {
  return {
    type: SET_UNITS,
    payload: units,
  };
}
export function setRecentUnits(recentUnits) {
  return {
    type: SET_RECENT_UNITS,
    payload: recentUnits,
  };
}
export function setRecentFiles(recentFiles) {
  return {
    type: SET_RECENT_FILES,
    payload: recentFiles,
  };
}
export function setCourses(courses) {
  return {
    type: SET_COURSES,
    payload: courses,
  };
}
export function setData(type, data) {
  return (dispatch) => {
    switch (type) {
      case COURSES:
        dispatch(setCourses(data));
        break;
      case UNITS:
        dispatch(setUnits(data));
        break;
      case RECENT_FILES:
        dispatch(setRecentFiles(data));
        break;
      default:
        break;
    }
  };
}

export function getData(type) {
  //GET ALL TYPES OF DATA FROM LOCAL STORAGE OR API IF NEEDED
  return (dispatch) => {
      if (type === CURRENT_SEMESTER_UNITS || type === RECENT_FILES) {
          return;
        }
    const data = getLocalData(type);
    if (data) {
        console.log('data from local:',data)
      dispatch(setData(type, data));
      return
    }
     else {
      let url = "";
      switch (type) {
        case COURSES:
          url = api.routes.coursesUrl;
          break;
        case UNITS:
          url = api.routes.allUnitsUrl;
          break;
        default:
          break;
      }
      axios
        .get(url)
        .then((res) => {
          dispatch(setData(type, res.data));
          setLocalData(type, res.data, 72); //72 is hours before expiry
        })
        .catch((err) => {
          dispatch(showAlert(err.message));
        });
    }
  };
}
