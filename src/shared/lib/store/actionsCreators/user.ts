import {Dispatch} from "react";
import {FetchUserAction, UserActionTypes} from "../../types/userType/userType";
import axios from "../../../axios/axios";

// TODO make params for request

export const fetchEvents = () => {
    return async (dispatch: Dispatch<FetchUserAction>) => {
        dispatch({type: UserActionTypes.FETCH_USER_REQUEST, payload: []})
        try {
            const { data } = await axios.get('/events');
            dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: data})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_FAILURE,
                payload: 'Произошла ошибка при загрузке событий'
            })
        }
    }
}
