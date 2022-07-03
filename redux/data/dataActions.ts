import {
  SET_UNITS,
  SET_COURSES,
  SET_RECENT_UNITS,
  SET_RECENT_FILES,
  SET_CURRENT_SEMESTER_UNITS,
  Unit
} from "./dataTypes";
import { getLocalData, getObjLength, setLocalData } from "../../utils/helpers";
import { api } from "../../utils/urls";
import axios from "axios";
import {
  ACTIVE_UNIT,
  COURSES,
  CURRENT_SEMESTER_UNITS,
  RECENT,
  RECENT_FILES,
  UNITS,
} from "../../utils/constants";
import { showAlert } from "../alert";
export function setCurentSemesterUnits(data) {
    return {
        type: SET_CURRENT_SEMESTER_UNITS,
        payload: data
    }
}
//todo:find way to check after while if the user has moved on to another sem

export function filterCurrentSemesterUnits(){
  return async (dispatch,getState)=>{
    const {data,userInfo}=getState()
    const currentSemesterUnits= await data.units.filter(unit=>(unit.year==userInfo.year&& unit.semester==userInfo.semester)
    )
    // if(currentSemesterUnits.length>0){
    //   setLocalData(CURRENT_SEMESTER_UNITS,currentSemesterUnits,)
    // }
    dispatch(setCurentSemesterUnits(currentSemesterUnits))
  }

}

export function updateRecentUnits(unit:Unit) {
    return (dispatch,getState)=>{
    const recentUnits=getState().data.recentUnits
    let updatedrecent;
    if (recentUnits) {
      const recentcopy = { ...recentUnits };
      if (getObjLength(recentUnits) >= 3) {
           for (let unit in recentcopy) {
            delete recentcopy[unit]
            break// to only delete oldest item
        } 
      }
      updatedrecent = {
        ...recentcopy,
        //combine old items in history with the recently searched item
        [unit.code]:unit
      };
    }
     else {
       updatedrecent = {
         [unit.code]:unit
        };
    }
    dispatch(setRecentUnits(updatedrecent));
    setLocalData(RECENT, updatedrecent,720)
    }
}

export function setUnits(units:object[]) {
  return {
    type: SET_UNITS,
    payload: units,
  };
}
export function setRecentUnits(recentUnits:object) {
  return {
    type: SET_RECENT_UNITS,
    payload: recentUnits,
  };
}
export function setRecentFiles(recentFiles:object[]) {
  return {
    type: SET_RECENT_FILES,
    payload: recentFiles,
  };
}
export function setCourses(courses:object[]) {
  return {
    type: SET_COURSES,
    payload: courses,
  };
}
export function setData(type:string, data:object[]) {
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

export function getData(type:string) {
  //GET ALL TYPES OF DATA FROM LOCAL STORAGE OR API IF NEEDED
  return dispatch => {
      if (type === CURRENT_SEMESTER_UNITS || type === RECENT_FILES) {
          return;
        }
    const data = getLocalData(type);
    if (data) {
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
