import {
    ADD_COMMENT_FEEDBACK,
    RESET_FEEDBACK_STATUS,
    FETCH_MOVIE_COMMENTS,
    CLEAR_MOVIE_COMMENTS,
    COMMENT_SEND_LOADING
} from '../actions/types';

const INITIAL_STATE = {
    feedback: null,
    movieComments: null,
    commentSendLoading: false
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
        case COMMENT_SEND_LOADING:
            return { ...state, commentSendLoading: action.payload };
        default:
            return state;
    }
}