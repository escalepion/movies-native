import {
    FETCH_MOVIES,
    MOVIE_LIST_LOADING,
    MOVIE_LIST_LOADING_STOP,
    SELECT_MOVIE_TAB
} from '../actions/types';

const INITIAL_STATE = { 
    all: null, 
    movie: null, 
    loading: false,
    error: '',
    selectedTab: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_MOVIE_TAB:
         return { ...state, selectedTab: action.payload };
        case FETCH_MOVIES:
         return { ...state, all: action.payload.data.results };
        case MOVIE_LIST_LOADING:
             return { ...state, loading: true };
        case MOVIE_LIST_LOADING_STOP:
             return { ...state, loading: false };
        default:
         return state; 
    }
};
