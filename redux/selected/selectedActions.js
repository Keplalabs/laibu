import { SELECT_COURSE, SELECT_SEMESTER, SELECT_YEAR } from "./selectedTypes"

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
