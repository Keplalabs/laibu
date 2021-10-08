import { SET_COURSE_INFO, SET_CURRENT_SEMESTER, SET_CURRENT_YEAR, SET_RECENT_UNITS, SET_SELECTED_UNIT, SET_SEMESTER_UNITS, SET_UNIT_NOTES,} from "./unitTypes"

const initialState={
    courseInfo:{},
    loading:false,
    currentYear:null,
    currentSemester:null,
    selectedUnit:{},
    selectedUnitNotes:{},
    currentSemesterUnits:{},
    recentUnits:{}
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
        case SET_RECENT_UNITS:
            return {
                ...state,
                recentUnits:action.payload
            }
        case SET_SELECTED_UNIT:

            return {
                ...state,
                selectedUnit:action.payload
            }
        case SET_UNIT_NOTES:
            return {
                ...state,
                selectedUnitNotes:action.payload
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