import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer';

export default combineReducers({
movies: MoviesReducer
});
