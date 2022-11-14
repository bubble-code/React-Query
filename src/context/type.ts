
import { LOADING, ERROR, DATA } from './typeAction';

export interface AppStateType {
    loading: boolean,
    error: string,
    data: string,
}

interface ActionType {
    type: typeof LOADING | typeof ERROR | typeof DATA | null,
    payload: AppActionType,
}

export type AppActionType = ActionType