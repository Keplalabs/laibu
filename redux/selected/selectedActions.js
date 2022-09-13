import { SELECT_COURSE, SELECT_SEMESTER,SET_USER_NAME, SELECT_YEAR, } from "./selectedTypes"

export function selectCourse(course){
    return {
        type:SELECT_COURSE,
        payload:course
    }

}
export function selectSemester(semester){
    return {
        type:SELECT_SEMESTER,
        payload:semester
    }

}
export function selectYear(year){
    return {
        type:SELECT_YEAR,
        payload:year
    }

}
export function setUserName(username){
    return {
        type:SET_USER_NAME,
        payload:username
    }

}
export function setSelectedUnitNotes(data) {
    return {
        type: SET_UNIT_NOTES,
        payload: data
    }
}
