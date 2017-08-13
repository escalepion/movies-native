import { StackNavigator, DrawerNavigator } from 'react-navigation';

import MoviesContainer from '../screens/MoviesContainer';
import Main from '../screens/Main';
import MovieShow from '../screens/MovieShow';

import LogIn from '../screens/auth/LogIn';
import SignUp from '../screens/auth/SignUp';
import SignOut from '../screens/auth/SignOut';

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
    screen: MovieShow
}
});

export const DrawNav = DrawerNavigator(
  {
    LoggedMain: {
      path: '/',
      screen: LoggedIn,
       navigationOptions: {
        drawerLabel: 'Main'
    }
    },
    SignOut: {
      path: '/sent',
      screen: SignOut,
      navigationOptions: {
        drawerLabel: 'Sign Out'
    }
    },
  },
  {
    initialRouteName: 'LoggedMain',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

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
        screen: DrawNav,
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
