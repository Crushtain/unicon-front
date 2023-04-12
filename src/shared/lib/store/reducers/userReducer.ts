import {UserActionTypes, UserState, FetchUserAction} from "@/shared/lib/types/userType/userType";
import axios from 'axios';

const initialState: UserState = {
    data: [],
    error: '',
    isLoading: false,
}

export const userReducer = (state = initialState, action: FetchUserAction) => {
    switch (action.type) {
        case  UserActionTypes.FETCH_USER_REQUEST:
            return {...state, data: [], isLoading: true};
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {...state, data: action.payload, isLoading: false};
        case UserActionTypes.FETCH_USER_FAILURE:
            return {...state, error: action.payload, isLoading: false};
        case UserActionTypes.ADD_USER_REQUEST:
            return {...state, isLoading: true};
        case UserActionTypes.ADD_USER_SUCCESS:
            axios.get('/api/users')                 // запрос на сервер с новым списком пользователей
                .then(response => {
                                                        // Обновление состояния приложения с помощью нового списка пользователей
                    return {...state, data: response.data, isLoading: false};
                })
                .catch(error => {
                    return {...state, error: error.message, isLoading: false};
                });
            return {...state, isLoading: false};
        case UserActionTypes.ADD_USER_FAILURE:
            return {...state, isLoading: false};
        default:
            return state;

    }
}