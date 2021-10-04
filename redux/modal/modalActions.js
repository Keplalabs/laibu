
import { SHOW_MODAL, HIDE_MODAL } from './modalTypes'
export function showModal(params) {
    return {
        type: SHOW_MODAL
    }

}
export function hideModal(params) {
    return {
        type: HIDE_MODAL
    }

}