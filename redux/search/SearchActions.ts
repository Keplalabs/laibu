import { ACTIVE_UNIT } from "../../utils/constants";
import { Unit } from "../data/dataTypes";
import { SET_SELECTED_UNIT,SET_SEARCH_HISTORY, SET_ACTIVE_UNIT_CODE } from "./searchTypes";

export function setSelectedUnitCode(code:string){
return{
    type:SET_ACTIVE_UNIT_CODE,
    payload:code
}
}
export function setActiveUnit(unit:Unit){
return{
    type:SET_SELECTED_UNIT,
    payload:unit
}
}

export function setSelectedUnit(unit:Unit){
    return dispatch=> {
        dispatch(setActiveUnit(unit))
        dispatch(setSelectedUnitCode(unit.code))
    }
}
export function retreiveActiveUnit(){
    return dispatch=>{
        let activeUnit=JSON.parse(localStorage.getItem(ACTIVE_UNIT))
        if (activeUnit) dispatch(setSelectedUnit(activeUnit))
    }
}
export function getSearchHistory(){
    let history:object[]=[]
    //local storage logic
    return{
        type:SET_SEARCH_HISTORY,
        payload:history
    }
}