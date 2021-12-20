import { SET_PAGE_LOADING, SET_LOADING_BG } from './loaderTypes'
const initialState={
    loading:true,
    bg:"dark"
}
export const loaderReducer=(state=initialState,action)=>{
    switch (action.type){
        case SET_PAGE_LOADING:
            return {
                ...state,
                loading:action.payload,
        }
        break
        case SET_LOADING_BG:
            return {
                ...state,
                bg:action.payload,
        }   
        default:
            return state

    }

}
