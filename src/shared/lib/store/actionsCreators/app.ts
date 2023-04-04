import {Dispatch} from "react";
import {FetchAppAction, AppActionTypes} from "../../types/appType/appType";
import axios from "../../../axios/axios";

// TODO make params for request

export const fetchEvents = () => {
    return async (dispatch: Dispatch<FetchAppAction>) => {
        dispatch({type: AppActionTypes.FETCH_APP_START, payload: []})
        try {
            const { data } = await axios.get('/events');
            dispatch({type: AppActionTypes.FETCH_APP_SUCCESS, payload: data})
        } catch (e) {
            dispatch({
                type: AppActionTypes.FETCH_APP_ERROR,
                payload: 'Произошла ошибка при загрузке событий'
            })
        }
    }
}
