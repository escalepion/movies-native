import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';


import MoviesReducer from './movies_reducer';
import AuthReducer from './auth_reducer';
import CommentReducer from './comment_reducer';

export default combineReducers({
form,
movies: MoviesReducer,
auth: AuthReducer,
comments: CommentReducer
});
