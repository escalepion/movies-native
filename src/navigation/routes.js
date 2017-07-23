import { StackNavigator } from 'react-navigation';

import MoviesContainer from '../screens/MoviesContainer';
import Main from '../screens/Main';
import MovieShow from '../screens/MovieShow';

import LogIn from '../screens/auth/LogIn';
import SignUp from '../screens/auth/SignUp';

export const LoggedIn = StackNavigator({
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

export const LoggedOut = StackNavigator({
    LogIn: {
        screen: LogIn,
        navigationOptions: {
            title: 'Log In'
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up'
        }
    }
});

export const RootNavigator = StackNavigator({
    LoggedOut: {
        screen: LoggedOut,
    },
    LoggedIn: {
        screen: LoggedIn
    }
},
{
    headerMode: 'none'
}
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: LoggedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: LoggedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
