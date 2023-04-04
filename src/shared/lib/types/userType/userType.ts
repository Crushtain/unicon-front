export interface IUser {
    _id: string;
    name: string;
    email: string; // будет ли привязка к почте?
}

export interface UserState {
    data: IUser[];
    error: string;
    isLoading: boolean;
}
export enum UserActionTypes {
    FETCH_USER_REQUEST = "FETCH_USER_REQUEST",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
    ADD_USER_REQUEST = "ADD_USER_REQUEST",
    ADD_USER_SUCCESS = "ADD_USER_SUCCESS",
    ADD_USER_FAILURE = "ADD_USER_FAILURE"


}

interface FetchUserActionStart {
    type: UserActionTypes.FETCH_USER_REQUEST,
    payload: [],
}

interface FetchUserActionSuccess {
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: IUser[],
}

interface FetchUserActionError {
    type: UserActionTypes.FETCH_USER_FAILURE,
    payload: string,
}

export interface AddUserRequestAction {
    type: UserActionTypes.ADD_USER_REQUEST;
}

export interface AddUserSuccessAction {
    type: UserActionTypes.ADD_USER_SUCCESS;
}

export interface AddUserFailureAction {
    type: UserActionTypes.ADD_USER_FAILURE;
    payload: string;
}

export type FetchUserAction =
    FetchUserActionStart |
    FetchUserActionSuccess |
    FetchUserActionError |
    AddUserRequestAction  |
    AddUserSuccessAction  |
    AddUserFailureAction;
