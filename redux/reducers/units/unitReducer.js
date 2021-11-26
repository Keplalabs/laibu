import { SET_COURSE_INFO, SET_CURRENT_SEMESTER, SET_CURRENT_YEAR,SET_SEMESTER_UNITS,} from "./unitTypes"

const initialState={
    courseInfo:{},
    // loading:false,
    currentYear:null,
    currentSemester:null,
    currentSemesterUnits:{},
}
export function courseInfoReducer(state=initialState,action){
    switch(action.type){
        case SET_COURSE_INFO:
            return {
                ...state,
                courseInfo:action.payload
            }
        case SET_CURRENT_SEMESTER:
            return {
                ...state,
                currentSemester:action.payload
            }
        case SET_CURRENT_YEAR:
            return {
                ...state,
                currentYear:action.payload
            }
        case SET_SEMESTER_UNITS:
            return {
                ...state,
                currentSemesterUnits:action.payload
            }     
        default:
            return state    

    }
}