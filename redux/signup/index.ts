export const SIGN_UP: string = "SIGN_UP";
type signUpSteps = {
  show: boolean;
  steps: {
    username: string;
    year: number;
    course: string;
    semester: number;
  };
};
const initialState: signUpSteps = {
  show: false,
  steps: {
    course: "",
    semester: 1,
    username: "",
    year: 1,
  },
};
export function setSignUp(val: boolean) {
  return {
    type: SIGN_UP,
    payload: { show: val },
  };
}
export function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
