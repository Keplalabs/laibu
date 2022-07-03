
import { SHOW_MODAL, HIDE_MODAL } from './modalTypes'
export function showModal() {
    return {
        type: SHOW_MODAL
    }

}
export function hideModal() {
    return {
        type: HIDE_MODAL
    }

}