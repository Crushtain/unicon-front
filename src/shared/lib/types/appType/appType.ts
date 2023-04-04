export interface IApp {
    _id: string;
    name: string;
    text: string;
}

export interface AppState {
    data: IApp[];
    error: string;
    isLoading: boolean;
}
export enum AppActionTypes {
    FETCH_APP_START = "FETCH_APP_START",
    FETCH_APP_SUCCESS = "FETCH_APP_SUCCESS",
    FETCH_APP_ERROR = "FETCH_APP_ERROR",
}

interface FetchAppActionStart {
    type: AppActionTypes.FETCH_APP_START,
    payload: [],
}

interface FetchAppActionSuccess {
    type: AppActionTypes.FETCH_APP_SUCCESS,
    payload: IApp[],
}

interface FetchAppActionError {
    type: AppActionTypes.FETCH_APP_ERROR,
    payload: string,
}

export type FetchAppAction = FetchAppActionStart | FetchAppActionSuccess | FetchAppActionError;
