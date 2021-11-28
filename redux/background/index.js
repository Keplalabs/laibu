import { bgTypes, defaultBgColor } from "../../utils/constants"

export const SET_BACKGROUND='SET_BACKGROUND'

const initialState={
    bgType:bgTypes.color,
    bgColor:defaultBgColor,
    gradientColor1:"",
    gradientColor2:"",
    imageUrl:""
}
export function setBackground(payload){
    return {
        type:SET_BACKGROUND,
        payload:payload
    }
}
export const backgroundReducer=(state=initialState,action)=>{
    switch (action.type){
        case SET_BACKGROUND:
            return {
                ...initialState,
                ...action.payload
            }
        default:
            return state
    }

}