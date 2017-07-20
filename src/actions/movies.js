import axios from 'axios';

import {
    FETCH_MOVIES,
    MOVIE_LIST_LOADING,
    MOVIE_LIST_LOADING_STOP,
    SELECT_MOVIE_TAB
} from './types';

const ROOT_URL = 'https://api.themoviedb.org/3/search/multi?api_key=5e8e31bfa6009b988f0b5875301bc793&query=';

export const fetchMovies = (query) => {
    return (dispatch) => {
        dispatch(movieListLoading(true));
        axios.get(`${ROOT_URL}${query}`)
         .then((response) => {
             dispatch({ type: FETCH_MOVIES, payload: response });
             dispatch(movieListLoading(false));
            })
         .catch(err => console.log(err));
    };
};
export const selectMovieTab = (movie) => {
    return {
        type: SELECT_MOVIE_TAB,
        payload: movie
    };
};

export const movieListLoading = (status) => {
    if (status) {
        return { type: MOVIE_LIST_LOADING };
    }

    return {
        type: MOVIE_LIST_LOADING_STOP
    };
}
