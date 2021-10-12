import { combineReducers } from 'redux'
import { loginReducer } from '../login/loginReducer'
import { modalReducer } from '../modal/modalReducer'
import { userReducer } from '../user/userReducer'
import {alertReducer} from '../alert'
import { courseInfoReducer } from './units/unitReducer'
import selectedReducer from '../selected/selectedReducers'

export const rootReducer = combineReducers({
    modal: modalReducer, auth: loginReducer,selected:selectedReducer, userInfo: userReducer,alert:alertReducer,courseInfo:courseInfoReducer,

})
