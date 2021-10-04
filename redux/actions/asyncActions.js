import axios from "axios"


export const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE='FETCH_USERS_FALIURE'

export function fetchUsersRequest(){
    return {
        type:FETCH_USERS_REQUEST
    }
}
export function fetchUsersSuccess(users) {
 return {
     type:FETCH_USERS_SUCCESS,
    payload:users
    }   
}
export function fetchUsersFailure(error) {
return {
    type:FETCH_USERS_FAILURE,
    payload:error
}
}
export function fetchUsers() {
    return function(dispatch){
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp=>{
            dispatch(fetchUsersSuccess(resp.data))

        }).catch(error=>{
            dispatch(fetchUsersFailure(error))
        })

    }
    
}