import { SET_COURSES, SET_UNITS,SET_RECENT_UNITS,SET_RECENT_FILES } from "./dataTypes";

const initialState={
    courses:[],
    units:[],
    recentUnits:[],
    recentFiles:[]

}
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
    default:
        return state
}
}