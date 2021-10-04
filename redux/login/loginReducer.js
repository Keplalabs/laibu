import { FETCH_USERS_FAILURE, FETCH_REQUEST, FETCH_USERS_SUCCESS, SET_CURRENT_USER, CLEAR_ERROR, } from "./loginTypes";
const initialState = {
    user: {},
    loading: false,
    message: null,
    error: null,

}
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                user: action.payload
            }
        case FETCH_REQUEST:
            return {
                loading: true,
                error: null,
            }
        case CLEAR_ERROR:
            return {
                error: null,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                message: action.payload,
                error: null,
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                message: null,
                error: action.payload
            }

        default: return state
    }
}