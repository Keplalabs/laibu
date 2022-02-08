import axios from "axios";
import { api } from "../../utils/urls";
import { showAlert } from "../alert"
import {
  SET_LOADING,
  SET_USER_TOKEN,
  USER_DETAILS,
  DETAILS_TO_UPDATE,
} from "./userTypes";
import { validateToken } from "../../utils";
import jwtDecode from "jwt-decode";
import { User } from "@prisma/client";
import {ERROR,Status,SUCCESS} from '../../utils/constants'
import { assignStatus } from "../../utils/helpers";

export function setUserDetails(user) {
  return {
    type: USER_DETAILS,
    payload: user,
  };
}
//gets token from local storage or requests to api if local token expired
export type StudentInfo={
      email:string,
      course:string,
      semester:number,
      year:number,
      status:string
}
export function saveUserData(userData:StudentInfo){
return async dispatch=>{
  try{
  
    const user=await axios.put('/api/user',userData)
    dispatch(showAlert({message:"information updated succesfully",type:SUCCESS}))
  }
  catch(err){
      dispatch(showAlert({message:err.message,type:ERROR }))
  }
}
}
// export function getUserToken({ email }) {
//   return (dispatch) => {
//     let token = localStorage.getItem("token");
//     if (token && validateToken(token)) {
//       dispatch(setToken(token));
//       return token;
//     } else {
//       axios
//         .post(api.routes.getToken, { email })
//         .then((res) => {
//           const { token } = res.data;
//           if (token) {
//             dispatch(setToken(token));
//             localStorage.setItem("token", token);
//             return token;
//           }
//         })
//         .catch((err) => {
//         dispatch(showAlert({ type:'error', message: err.message }))

//         });
//     }
//   };
// }
export function setMissingUserInfo(missing) {
  return {
    type: DETAILS_TO_UPDATE,
    payload:missing
  };
}

export function setLoading(state) {
  return {
    type: SET_LOADING,
    payload: state,
  };
}

export function fetchUserDetails(userData) {
  let user;
  return async dispatch => {
    try{
    const resp=await axios.post("/api/user/account",userData)
    user=resp.data
    if (!resp.data) {
      const status=assignStatus(userData.email)
      const data={email:userData.email,name:userData.name,status}
      const resp=await axios.post('/api/user',data) 
      user=resp.data   
      }
     
    if (user.status===Status.STUDENT){

      const missing = [];
      //   const token = dispatch(getUserToken(user));
      //   const data = jwtDecode(token);
      dispatch(setUserDetails({...user,status:Status.STUDENT}));
    const { course, semester, year } = user;
    if (!course) {
      missing.push("course");
    }
    if (!semester) {
      missing.push("semester");
    }
    if (!year) {
      missing.push("year");
    }
    dispatch(setMissingUserInfo(missing));
  }
  else if(user.status===Status.FACULTY){
    dispatch(setUserDetails({...user,status:Status.FACULTY}))
  }
}
    catch(err){
      dispatch(showAlert({message:err.message,type:ERROR }))
    }
  };
}

export function setToken(token) {
  return { type: SET_USER_TOKEN, payload: token };
}

