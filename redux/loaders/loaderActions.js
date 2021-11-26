import { SET_PAGE_LOADING } from "./loaderTypes";

export function setLoading(state) {
    return {
        type: SET_PAGE_LOADING,
        payload: state

    }
}