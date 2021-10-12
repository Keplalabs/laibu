import { SELECT_COURSE, SELECT_SEMESTER, SELECT_YEAR } from "./selectedTypes";
const initialState={
    selectedCourse:null,
    selectedSemester:null,
    selectedYear:null,
}
export default function selectedReducer(state=initialState,action){
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
        default:
            return state
    }
}