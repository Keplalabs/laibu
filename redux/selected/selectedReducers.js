import { SELECT_COURSE, SELECT_SEMESTER, SET_USER_NAME, SELECT_YEAR,SET_SELECTED_UNIT, SET_SELECTED_UNIT_NOTES } from "./selectedTypes";
const initialState={
    selectedCourse:"",
    selectedSemester:1,
    selectedYear:1,
    selectedUserName:"",
    selectedUnit:null,
    selectedUnitNotes:{},


}
export function selectedReducer(state=initialState,action){
    switch (action.type){
        case SELECT_COURSE:
            return {
                ...state,
                selectedCourse:action.payload
            }
        case SELECT_SEMESTER:
            return {
                ...state,
                selectedSemester:action.payload
            }
        case SET_USER_NAME:
            return {
                ...state,
                selectedUserName:action.payload
            }
        case SELECT_YEAR:
            return {
                ...state,
                selectedYear:action.payload
            } 
        case SET_SELECTED_UNIT_NOTES:
            return {
                ...state,
                selectedUnitNotes:action.payload
            }
            default:
                return state
        }
}