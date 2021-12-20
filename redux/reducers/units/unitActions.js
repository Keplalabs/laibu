import axios from "axios"
import { api } from "../../../utils/urls"
import { getLocalData, setLocalData } from "../../../utils/helpers"
import { showAlert } from "../../actions"
import {CURRENT_SEMESTER_UNITS, RECENT} from '../../../utils/constants'
import { SET_UNIT_NOTES, SET_COURSE_INFO, SET_SEMESTER_UNITS,SET_CURRENT_YEAR, SET_CURRENT_SEMESTER,SET_LOADING } from "./unitTypes"
export function setCurentSemesterUnits(data) {
    return {
        type: SET_SEMESTER_UNITS,
        payload: data
    }
}

export function setYear(year) {
    return {
        type: SET_CURRENT_YEAR,
        payload: year
    }

}
//todo:find way to check after while if the user has moved on to another sem
export function setSemester(semester) {
    return {
        type: SET_CURRENT_SEMESTER,
        payload: semester
    }

}


export function setCourseInfo(info) {
    return {
        type: SET_COURSE_INFO,
        payload: info
    }

}
// export function setLoading(state) {
//     return {
//         type: SET_LOADING,
//         payload: state

//     }
// }
//should be called after logging in
export function fetchCourseInfo(user) {
    return dispatch => {
        // dispatch(setLoading(true))
        const currentSemesterUnits = getLocalData(CURRENT_SEMESTER_UNITS)
        if (currentSemesterUnits) {
            dispatch(setCurrentSemesterUnits(currentSemesterUnits))
            // dispatch(setLoading(false))
        }
        else {  
        let payload = {
            course_code: user.course || 'I39',
            year: user.year || 3,
            semester: user.semester|| '2'
        }
        axios.post(api.routes.filterUnitsUrl, payload).then(res =>
        {
            dispatch(setCurentSemesterUnits(res.data.message))
            // dispatch(setLoading(false))
        }   
        ).catch(err => {
            dispatch(showAlert({ type:'error', message: err.message }))
            // dispatch(setLoading(false))
        })

        //todo:setup expiry as well in the future
            
            
                    
                
        }
    }
}


//should be called when a new unit is selected/when select unit is called
//RECENT is an object of objects instead of a list to prevent unit duplication in local storage
export function updateRecentUnits(unit) {
    let updatedRecentUnits = {}
    const recentUnits = localStorage.getItem(RECENT)
    if (recentUnits) {
        updatedRecentUnits = {
            ...recentUnits,
            unit
        }
    }
    else {
        updatedRecentUnits = { unit }
    }
    dispatch(setRecentUnits(updatedRecentUnits))
    setLocalData(RECENT, updatedRecentUnits,720)
}

