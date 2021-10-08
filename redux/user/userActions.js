import axios from "axios"
import {api} from '../../utils/urls'
import { SET_LOADING, SET_USER_TOKEN, SHOULD_UPDATE_COURSE, SHOULD_UPDATE_SEMESTER, SHOULD_UPDATE_YEAR, USER_DETAILS } from "./userTypes"
import { validateToken } from "../../utils"
import jwtDecode from "jwt-decode"
import { setAlertMessage, setAlertType } from "../alert"
export function getUserToken({email}){
    return dispatch=>{
        let token=localStorage.getItem('token')
        if( token && validateToken(token)){
            dispatch(setToken(token))
            return token
        }
        else{

            axios.post(api.routes.getToken,{email})
            .then(res=>{
                const {token}=res.data
                if (token){
                    dispatch(setToken(token))
                    localStorage.setItem('token',token)
                    return token
                }
            }).catch(err=>{
                dispatch(showAlert(true))
                dispatch(setAlertType(err.type))
                dispatch(setAlertMessage(err.message))
                // console.error(err)
            })
        }

    }
}
function shouldUpdateCourse(state){
    return {
        type:SHOULD_UPDATE_COURSE,
        payload:state
    
    }
    
}

function shouldUpdateSemester(state){
    return {
        type:SHOULD_UPDATE_SEMESTER,
        payload:state
        
    }
    
}
function shouldUpdateYear(state){
    return {
    type:SHOULD_UPDATE_YEAR,
    payload:state
    
    }
 
}
function setLoading(state){
    return {
        type:SET_LOADING,
        payload:state
    }

}
export function fetchUserDetails(user){
    return dispatch=>{
        dispatch(setLoading(true))
        const token=dispatch(getUserToken(user))
        const data=jwtDecode(token)
        dispatch(setUserDetails(data.sub))
        const {course,semester,year}=data.sub
        if (!course){
            dispatch(shouldUpdateCourse(true))
        }  
        if (!semester){
            dispatch(shouldUpdateSemester(true))
        }
        if (!year){
            dispatch(shouldUpdateYear(true))
        }
        dispatch(setLoading(false))
    }
}


export function setToken(token){
    return {type:SET_USER_TOKEN,
        payload:token}
        
    }
    
    export function setUserDetails(user){
        return{
        type:USER_DETAILS,
        payload:user
        }
    }