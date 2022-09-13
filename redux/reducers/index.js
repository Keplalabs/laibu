import { combineReducers } from "redux";
import { modalReducer } from "../modal/modalReducer";
import { userReducer } from "../user/userReducer";
import { alertReducer } from "../alert";
import { selectedReducer } from "../selected/selectedReducers";
import { dataReducer } from "../data/dataReducer";
import { loaderReducer } from "../loaders/loaderReducer";
import { backgroundReducer } from "../background/index";
import { signUpReducer } from "../signup";
import { searchReducer } from "../search/searchReducer";
export const rootReducer = combineReducers({
  data: dataReducer,
  search: searchReducer,
  background: backgroundReducer,
  signup:signUpReducer,
  modal: modalReducer,
  selected: selectedReducer,
  userInfo: userReducer,
  alert: alertReducer,
  loader: loaderReducer,
});
