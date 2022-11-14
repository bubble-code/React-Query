import { createContext, useContext, useMemo, useReducer } from 'react';
import { LOADING, ERROR, DATA } from './typeAction';
import { AppStateType, AppActionType } from './type';

const initialState: AppStateType = {
    loading: false,
    error: '',
    data: '',
}

function reducer(state: AppStateType, action: AppActionType): AppStateType {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true, error: '', data: '' }
        case ERROR:
            return { ...state, loading: false, error: action.payload.toString(), data: '' }
        case DATA:
            return { ...state, loading: false, error: '', data: action.payload.toString() }
        default:
            return state;
    }
}

const AppContext = createContext(null);
AppContext.displayName = 'AppContext';

// const AppProvider = ({ children }: any) => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const value = useMemo(() => [state, dispatch], [state]);
//     return (<AppContext.Provider value= { value } >
//         { children }
//         < /AppContext.Provider>)
// }

const AppGetState = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('Context no found')
    }
    return context;
}