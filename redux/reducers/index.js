import { combineReducers } from 'redux'
import { loginReducer } from '../login/loginReducer'
import { modalReducer } from '../modal/modalReducer'
import { userReducer } from '../user/userReducer'
import {alertReducer} from '../alert'
import { courseInfoReducer } from './units/unitReducer'
import {selectedReducer} from '../selected/selectedReducers'
import {dataReducer} from '../data/dataReducer'
import {loaderReducer} from '../loaders/loaderReducer'
import { backgroundReducer } from '../background/index';

export const rootReducer = combineReducers({
    data:dataReducer ,background:backgroundReducer, modal: modalReducer, auth: loginReducer,selected:selectedReducer, userInfo: userReducer,alert:alertReducer,courseInfo:courseInfoReducer,loader:loaderReducer

})
