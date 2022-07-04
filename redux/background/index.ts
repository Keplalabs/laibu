import { bgTypes, defaultBgColor } from "../../utils/constants";

export const SET_BACKGROUND = "SET_BACKGROUND";
export const SET_TEXT_THEME = "SET_TEXT_THEME";

const initialState = {
  bgType: bgTypes.color,
  blurred: false,
  textTheme: "dark",
  bgColor: defaultBgColor,
  gradientColor1: "rgb(189,235,250,90%)",
  gradientColor2: "rgb(250,163,163,70%)",
  imageUrl: "",
};
export function setBackground(payload) {
  return {
    type: SET_BACKGROUND,
    payload: payload,
  };
}
export function setTextTheme(payload: string) {
  return {
    type: SET_TEXT_THEME,
    payload: payload,
  };
}
export const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND:
      return {
        ...initialState,
        ...action.payload,
      };
      case SET_TEXT_THEME:
          return{
              initialState,
              textTheme:action.payload
          }
    default:
      return state;
  }
};
