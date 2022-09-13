import axios from "axios";
// import { api } from "../../utils/urls";
import { showAlert } from "../alert";
import { USER_DETAILS } from "./userTypes";
// import { validateToken } from "../../utils";
// import jwtDecode from "jwt-decode";
import { ERROR, Status, SUCCESS } from "../../utils/constants";
import { assignStatus } from "../../utils/helpers";
import { UserTypes } from "./userReducer";
import { supabase } from "../../services/supabase";
import { filterCurrentSemesterUnits } from "../data/dataActions";

export function setUserDetails(user: UserTypes) {
  return async (dispatch)=>{
    await dispatch ({
      type: USER_DETAILS,
      payload: user,
    });
    dispatch(filterCurrentSemesterUnits())

  }
}

export function saveUserData(userData: UserTypes) {
  return async (dispatch) => {
    try {
      // const user = await axios.put("/api/user", userData);
      await supabase.from("User").insert(userData);
      dispatch(setUserDetails(userData));
      dispatch(showAlert({ message: "Sign up successful", type: SUCCESS }));
    } catch (err) {
      dispatch(showAlert({ message: err.message, type: ERROR }));
    }
  };
}

// export function fetchUserDetails(userData) {
//   let user;
//   return async (dispatch) => {
//     try {
//       const resp = await axios.post("/api/user/account", userData);
//       user = resp.data;
//       if (!resp.data) {
//         const status = assignStatus(userData.email);
//         const data = { email: userData.email, name: userData.name, status };
//         const resp = await axios.post("/api/user", data);
//         user = resp.data;
//       }

//       if (user.status === Status.STUDENT) {
//         const missing = [];
//         //   const token = dispatch(getUserToken(user));
//         //   const data = jwtDecode(token);
//         dispatch(setUserDetails({ ...user, status: Status.STUDENT }));
//         const { course, semester, year } = user;
//         if (!course) {
//           missing.push("course");
//         }
//         if (!semester) {
//           missing.push("semester");
//         }
//         if (!year) {
//           missing.push("year");
//         }
//         // dispatch(setMissingUserInfo(missing));
//       } else if (user.status === Status.FACULTY) {
//         await dispatch(setUserDetails({ ...user, status: Status.FACULTY }));
//       }
//       await dispatch(filterCurrentSemesterUnits());
//     } catch (err) {
//       dispatch(showAlert({ message: err.message, type: ERROR }));
//     }
//   };
// }
