import { Unit } from "../data/dataTypes";
import { SET_SELECTED_UNIT,SET_SEARCH_HISTORY, SET_ACTIVE_UNIT_CODE } from "./searchTypes";
type SearchTypes={
    selectedUnit:Unit | null
    selectedUnitCode:string
    searchHistory:object[]

}
const initialState:SearchTypes={
    selectedUnit: null,
    searchHistory: [],
    selectedUnitCode: ""
}
    
export function searchReducer(state=initialState,action){
    switch(action.type){
     
        case SET_SELECTED_UNIT:
            
            return {
                ...state,
                selectedUnit:action.payload
            }
        
        case SET_ACTIVE_UNIT_CODE:
    
            return {
                ...state,
                selectedUnitCode:action.payload
            }
        
        case SET_SEARCH_HISTORY:
            return{
                ...state,
                searchHistory:action.payload
            }
        default:
            return state
        }
    }