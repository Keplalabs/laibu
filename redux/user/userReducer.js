import { DETAILS_TO_UPDATE, SET_USER_TOKEN, USER_DETAILS } from "./userTypes";

const initialState={
    course:null,
    year:null,
    semester:null,
    role:4,
    token:null,
    loading:false,
    detailsToUpdate:[],
}

export function userReducer(state=initialState,action){

    switch(action.type){
        case SET_USER_TOKEN:
            return {
                ...state,
                token:action.payload
            }
        case USER_DETAILS:
            return{
                ...state,
                ...action.payload
            }
        case DETAILS_TO_UPDATE:
            return {
                ...state,
                detailsToUpdate:action.payload
            }
         
        default:
            return state
    }
}