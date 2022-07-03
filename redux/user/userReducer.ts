import { DETAILS_TO_UPDATE, SET_USER_TOKEN, USER_DETAILS } from "./userTypes";
interface UserTypes{
    course:string,
    year:number,
    semester:number,
    status:string,
    loading:boolean,
    detailsToUpdate:string[],

}
const initialState:UserTypes={
    course:null,
    year:null,
    semester:null,
    status:null,
    loading:false,
    detailsToUpdate:[],
}

export function userReducer(state=initialState,action){

    switch(action.type){
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