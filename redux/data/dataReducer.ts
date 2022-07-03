import { SET_COURSES, SET_UNITS,SET_RECENT_UNITS,SET_RECENT_FILES, SET_CURRENT_SEMESTER_UNITS } from "./dataTypes";
type DataTypes={
    courses:object[]
    units:object[]
    recentFiles:object[]
    recentUnits:object
    currentSemesterUnits:object[]
}
const initialState:DataTypes={
    courses: [],
    units: [],
    recentUnits: {},
    recentFiles: [],
    currentSemesterUnits: []
}
// export type DataAction={
//    type:string
//    payload:object[]
// }
export function dataReducer(state=initialState,action){

switch(action.type){
    case SET_COURSES:
        return {
            ...state,
            courses:action.payload
        }
    case SET_UNITS:
        return {
            ...state,
            units:action.payload
        }
    case SET_RECENT_UNITS:
        return {
            ...state,
            recentUnits:action.payload
            }
    case SET_RECENT_FILES:
        return {
            ...state,
            recentFiles:action.payload
            }
    case SET_CURRENT_SEMESTER_UNITS:
        return {
            ...state,
            currentSemesterUnits:action.payload
            }
    default:
        return state
}
}