import firebase from 'firebase';
import {
    ADD_COMMENT_FEEDBACK,
    RESET_FEEDBACK_STATUS,
    FETCH_MOVIE_COMMENTS,
    CLEAR_MOVIE_COMMENTS,
    COMMENT_SEND_LOADING
} from './types';

export function addComment({ comment }, id) {
    const { currentUser } = firebase.auth();
    if (currentUser) {
    return (dispatch) => {
        dispatch(setCommentSendLoading(true));
        firebase.database().ref(`comments/${id}`)
        .push({
            comment,
            userId: currentUser.uid
        })
        .then(function () {
            dispatch({ type: ADD_COMMENT_FEEDBACK, payload: 'Comment Added Successfuly' });
            dispatch(setCommentSendLoading(false));
//             setTimeout(() => {
//     dispatch({ type: RESET_FEEDBACK_STATUS })
//   }, 3000);
    }
        )
        .then(setTimeout(() => {
                dispatch({ type: RESET_FEEDBACK_STATUS });
            }, 3000))
        .catch(error => {
            dispatch({ type: ADD_COMMENT_FEEDBACK, payload: error });
            dispatch(setCommentSendLoading(false));
        });
    };
}
return {
    type: ADD_COMMENT_FEEDBACK,
    payload: 'Please log in'
};
}

export function resetFeedbackStatus() {
    return {
        type: RESET_FEEDBACK_STATUS
    };
}

export const setCommentSendLoading = (status) => {
    return {
        type: COMMENT_SEND_LOADING,
        payload: status
    };
};
 
export function fetchMovieComments(id) {
    const ref = firebase.database().ref(`comments/${id}`);
    return (dispatch) => {
        ref.on('value', function (snapshot) {
            dispatch({ type: FETCH_MOVIE_COMMENTS, payload: snapshot.val() });
        });
    }
}

export function clearMovieComments() {
    return {
        type: CLEAR_MOVIE_COMMENTS
    };
}
