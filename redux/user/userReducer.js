import { SET_USER_TOKEN, SHOULD_UPDATE_COURSE, SHOULD_UPDATE_SEMESTER, SHOULD_UPDATE_YEAR, USER_DETAILS } from "./userTypes";

const initialState={
    course:{},
    year:null,
    semester:null,
    role:4,
    token:null,
    shouldUpdateCourse:false,
    shouldUpdateSemester:false,
    shouldUpdateYear:false,
    loading:false,
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
            case SHOULD_UPDATE_COURSE:
                return{
                    ...state,
                    shouldUpdateCourse:action.payload
                }
                case SHOULD_UPDATE_SEMESTER:
                    return {
                        ...state,
                        shouldUpdateSemester:action.payload
                    }
                    case SHOULD_UPDATE_YEAR:
                        return {
                ...state,
                shouldUpdateYear:action.payload
            }
        default:
            return state
    }
}