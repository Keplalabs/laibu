import { SELECT_COURSE, SELECT_SEMESTER, SELECT_YEAR,SET_SELECTED_UNIT, SET_SELECTED_UNIT_NOTES } from "./selectedTypes";
const initialState={
    selectedCourse:null,
    selectedSemester:null,
    selectedYear:null,
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