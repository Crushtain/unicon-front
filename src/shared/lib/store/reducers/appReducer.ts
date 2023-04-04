import {AppActionTypes, AppState, FetchAppAction} from "@/shared/lib/types/appType/appType";


const initialState: AppState = {
    data: [],
    error: '',
    isLoading: false,
}

export const appReducer = (state = initialState, action:FetchAppAction) => {
    switch (action.type) {
        case AppActionTypes.FETCH_APP_START:
            return { ...state, data: [], isLoading: true }
        case AppActionTypes.FETCH_APP_SUCCESS:
            return { ...state, data: action.payload, isLoading: false }
        case AppActionTypes.FETCH_APP_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state
    }
}