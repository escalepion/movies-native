import {
    USER_SIGNUP_FAIL,
    USER_SIGNUP_SUCCESS,
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    CLEAR_FORM_ERROR,
    FETCH_CURRENT_USER
} from '../actions/types';

const INITIAL_STATE = {
    error: null,
    userLogged: false,
    currentUser: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return { ...state, currentUser: action.payload };
        case CLEAR_FORM_ERROR:
            return { ...state, error: null };
        case USER_LOGGED_OUT:
            return { ...state, userLogged: false, currenUser: null };
        case USER_LOGGED_IN:
            return { ...state, userLogged: true };
        case USER_SIGNUP_FAIL:
            return { ...state, error: action.payload };
        case USER_SIGNUP_SUCCESS:
            return { ...state, error: 'Created account successfully' };
        default:
         return state;
    }
}  