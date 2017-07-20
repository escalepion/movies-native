import { StackNavigator } from 'react-navigation';

import MoviesContainer from '../screens/MoviesContainer';
import Main from '../screens/Main';

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
}
});
