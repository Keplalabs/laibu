import { SELECT_COURSE, SELECT_SEMESTER, SELECT_YEAR,SET_SELECTED_UNIT } from "./selectedTypes"

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
export function setSelectedUnit(unitCode) {
    return {
        type: SET_SELECTED_UNIT,
        payload: unitCode
    }

}
export function setSelectedUnitNotes(data) {
    return {
        type: SET_UNIT_NOTES,
        payload: data
    }
}
