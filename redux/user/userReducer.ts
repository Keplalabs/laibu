import { Status } from "../../utils/constants";
import {USER_DETAILS } from "./userTypes";
export type UserTypes = {
  course: string;
  year: number;
  uid: string;
  email:string,
  username:string,
  semester: number;
  role: string | null;
  registeredUnits: string[]|null;
  moderatingUnits: string[]|null;
};
// detailsToUpdate:string[],

const initialState: UserTypes = {
  course: null,
  uid: null,
  email:"",
  username:"",
  year: null,
  semester: null,
  role: Status.STUDENT,
  registeredUnits: [],
  moderatingUnits: [],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
