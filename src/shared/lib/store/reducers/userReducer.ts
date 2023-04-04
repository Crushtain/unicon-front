import {UserActionTypes, UserState, FetchUserAction} from "@/shared/lib/types/userType/userType";
import axios from 'axios';

const initialState: UserState = {
    data: [],
    error: '',
    isLoading: false,
}

export const userReducer = (state = initialState, action: FetchUserAction) => {
    if (action.type === UserActionTypes.FETCH_USER_REQUEST) {
        return {...state, data: [], isLoading: true};
    } else if (action.type === UserActionTypes.FETCH_USER_SUCCESS) {
        return {...state, data: action.payload, isLoading: false};
    } else if (action.type === UserActionTypes.FETCH_USER_FAILURE) {
        return {...state, error: action.payload, isLoading: false};
    } else if (action.type === UserActionTypes.ADD_USER_REQUEST) {
        return {...state, isLoading: true};
    } else if (action.type === UserActionTypes.ADD_USER_SUCCESS) {// Выполните запрос на сервер, чтобы получить обновленный список пользователей
        axios.get('/api/users')
            .then(response => {
                // Обновите состояние вашего приложения с помощью нового списка пользователей
                return {...state, data: response.data, isLoading: false};
            })
            .catch(error => {
                return {...state, error: error.message, isLoading: false};
            });
        return {...state, isLoading: false};
    } else if (action.type === UserActionTypes.ADD_USER_FAILURE) {
        return {...state, isLoading: false};
    } else {
        return state;
    }
};