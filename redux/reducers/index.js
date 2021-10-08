import { combineReducers } from 'redux'
import { loginReducer } from '../login/loginReducer'
import { modalReducer } from '../modal/modalReducer'
import { userReducer } from '../user/userReducer'
import {alertReducer} from '../alert'
import { courseInfoReducer } from './units/unitReducer'

export const rootReducer = combineReducers({
    modal: modalReducer, auth: loginReducer, userInfo: userReducer,alert:alertReducer,courseInfo:courseInfoReducer,

})
