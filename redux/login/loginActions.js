import { api } from '../../urls'
// import jwt_decode from 'jwt-decode'
const r = api.routes
import { FETCH_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, SET_CURRENT_USER, CLEAR_ERROR } from "./loginTypes"

export function clearError() {
    return {
        type: CLEAR_ERROR
    }
}
export function fetchRequest() {
    return {
        type: FETCH_REQUEST
    }
}
export function fetchUserSuccess(message) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: message
    }
}
export function fetchUserFailure(error) {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }

}
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

