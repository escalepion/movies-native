import { StackNavigator } from 'react-navigation';

import MoviesContainer from '../screens/MoviesContainer';
import Main from '../screens/Main';
import MovieShow from '../screens/MovieShow';

export const RootNavigator = StackNavigator({
Main: { 
    screen: Main,
    navigationOptions: {
        title: 'Movie X'
    }
},
MovieList: { 
    screen: MoviesContainer,
    navigationOptions: {
        title: 'Search Results'
    }
},
MovieShow: { 
    screen: MovieShow,
    navigationOptions: {
        title: 'Search Results'
    }
}
});
