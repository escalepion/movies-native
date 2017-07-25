import {
    ADD_COMMENT_FEEDBACK,
    RESET_FEEDBACK_STATUS,
    FETCH_MOVIE_COMMENTS,
    CLEAR_MOVIE_COMMENTS
} from '../actions/types';

const INITIAL_STATE = {
    feedback: null,
    movieComments: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CLEAR_MOVIE_COMMENTS:
            return { ...state, movieComments: null };
        case FETCH_MOVIE_COMMENTS:
            return { ...state, movieComments: action.payload };
        case ADD_COMMENT_FEEDBACK:
            return { ...state, feedback: action.payload };
        case RESET_FEEDBACK_STATUS:
            return { ...state, feedback: null };
        default:
            return state;
    }
}