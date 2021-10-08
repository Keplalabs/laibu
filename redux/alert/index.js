import { initial } from "lodash"

const SHOW_ALERT='SHOW_ALERT'
const HIDE_ALERT='HIDE_ALERT'
const initialState={
    show:false,
    type:'',
    message:''

}
export function showAlert(alert){
    return{
        type:SHOW_ALERT,
        payload:{
            message:alert.message,
            type:alert.type
        }
    }

}
export function hideAlert(alert){
    return{
        type:HIDE_ALERT,
    }

}

export function alertReducer(state=initialState,action){
    switch(action.type){
        case SHOW_ALERT:
            return{
                show:true,
                message:action.payload.message,
                type:action.payload.type
            }
        case HIDE_ALERT:
            return initialState
            
        default:
            return state

    }
}