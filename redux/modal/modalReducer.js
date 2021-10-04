import { showModal, hideModal } from './modalActions'
import * as t from './modalTypes'

const initialState = {
    isVisible: false
}
export function modalReducer(state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case t.SHOW_MODAL:
            return {
                isVisible: true
            }
        case t.HIDE_MODAL:
            return {
                isVisible: false
            }
        default:
            return state


    }

}
