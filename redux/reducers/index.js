import { combineReducers } from 'redux'
import { loginReducer } from '../login/loginReducer'
import { modalReducer } from '../modal/modalReducer'

export const rootReducer = combineReducers({
    modal: modalReducer, auth: loginReducer
})
