import { combineReducers } from 'redux'
import { appReducer} from './appReducer'
import {AppState} from "@/shared/lib/types/appType/appType";
import { userReducer } from './userReducer'
import { UserState} from "@/shared/lib/types/userType/userType";

export interface RootState {
    app: AppState
    user: UserState
}

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer
})

export default rootReducer