import {
    ADD_COMMENT_FEEDBACK,
    RESET_FEEDBACK_STATUS,
    FETCH_MOVIE_COMMENTS,
    CLEAR_MOVIE_COMMENTS,
    COMMENT_SEND_LOADING,
    COMMENT_REMOVED,
    INJECT_MOVIE_COMMENT,
    REMOVE_COMMENT
} from '../actions/types';

const INITIAL_STATE = {
    feedback: null,
    movieComments: null,
    commentSendLoading: false,
    removeMessage: null,
    commentsArray: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REMOVE_COMMENT:
            console.log(action.payload);
            return { ...state, 
                commentsArray: [...state.commentsArray].filter((item) => {
                    return item.uid !== action.payload;
            }) };
        case INJECT_MOVIE_COMMENT:
            return { ...state, commentsArray: [action.payload, ...state.commentsArray] };
        case CLEAR_MOVIE_COMMENTS:
            return { ...state, commentsArray: [] };
        case FETCH_MOVIE_COMMENTS:
            return { ...state, movieComments: action.payload };
        case ADD_COMMENT_FEEDBACK:
            return { ...state, feedback: action.payload };
        case RESET_FEEDBACK_STATUS:
            return { ...state, feedback: null };
        case COMMENT_SEND_LOADING:
            return { ...state, commentSendLoading: action.payload };
        case COMMENT_REMOVED:
            return { ...state, removeMessage: action.payload };
        default:
            return state;
    }
}