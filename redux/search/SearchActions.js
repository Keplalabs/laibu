import { SET_SELECTED_UNIT } from "../reducers/units/unitTypes";

export function setSelectedUnit(unit){
    return {
        type:SET_SELECTED_UNIT,
        payload:unit
    }
}