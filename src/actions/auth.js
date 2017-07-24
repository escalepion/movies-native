import firebase from 'firebase';
import {
    USER_LOGGED_IN,
    USER_SIGNUP_FAIL,
    FETCH_CURRENT_USER,
    USER_LOGGED_OUT,
    SET_LOGIN_LOADING_TRUE,
    SET_LOGIN_LOADING_FALSE,
    USER_SIGNUP_SUCCESS,
    CLEAR_FORM_ERROR
} from './types';

export function signInUser({ email, password }) {
    return function (dispatch) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            () => {
            dispatch({ type: USER_LOGGED_IN });
            dispatch(setLoginLoading(false));
            }
        )
        .catch(
        error => {
        console.log(error.message);
        dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
        dispatch(setLoginLoading(false));
             });
    };
}

export function signUpUser({ email, password, username }) {
    const db = firebase.database();
    return function (dispatch) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (user) {
        dispatch({ type: USER_SIGNUP_SUCCESS });
        db.ref(`users/${user.uid}`).set({ name: username });
        dispatch(setLoginLoading(false));

  //Here if you want you can sign in the user
})
    .catch(error => {
        const error_message = error.message;
        dispatch({ type: USER_SIGNUP_FAIL, payload: error_message });
        dispatch(setLoginLoading(false));
    });
    };
}

export function fetchCurrentUser(id) {
    return function (dispatch) {
        firebase.database().ref(`users/${id}`)
        .once('value')
        .then(function(snapshot) {
            dispatch({type: FETCH_CURRENT_USER, payload: snapshot.val() });
        })
        .catch(error => console.log(error));
    };
}

export function userLoggedIn() {
    return {
        type: USER_LOGGED_IN
    };
}
export function userLoggedOut() {
    return function(dispatch) {
        firebase.auth().signOut()
        .then(() => dispatch({ type: USER_LOGGED_OUT }))
        .catch(error => console.log(error));
    };
}

export function setLoginLoading(status) {
    if (status) {
        return {
            type: SET_LOGIN_LOADING_TRUE
        };
    }

    return {
        type: SET_LOGIN_LOADING_FALSE
    };
}

export function clearFormError() {
    console.log('clear');
return {
    type: CLEAR_FORM_ERROR
};
}

