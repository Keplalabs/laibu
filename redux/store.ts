import { createStore, applyMiddleware,Action,Store } from 'redux'
import thunk,{ThunkMiddleware} from 'redux-thunk'
//borowser extension utility
import { ThunkAction } from 'redux-thunk'
import { rootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<Store, Action>)))
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
