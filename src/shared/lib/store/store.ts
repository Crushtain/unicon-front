import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import { HYDRATE } from 'next-redux-wrapper'
import { ThunkAction } from 'redux-thunk'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import rootReducer, { RootState } from './reducers/rootReducer'
import {userReducer} from "@/shared/lib/store/reducers/userReducer";
import {appReducer} from "@/shared/lib/store/reducers/appReducer";
import {composeWithDevTools} from "redux-devtools-extension";


// @ts-ignore
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
    app: appReducer,
    user: userReducer,
})

// @ts-ignore
const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)



