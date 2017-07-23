import React from 'react';
import Expo from 'expo';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Container, Spinner } from 'native-base'; 

import reducers from './src/reducers';
import { RootNavigator } from './src/navigation/routes';

class App extends React.Component {
   state = {
    isReady: false,
   }
async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({ isReady: true });

const config = {
    apiKey: 'AIzaSyDJcXKuZI13TUWzKK6kXdZA3Gxu1XuvMNk',
    authDomain: 'movies-a4783.firebaseapp.com',
    databaseURL: 'https://movies-a4783.firebaseio.com',
    projectId: 'movies-a4783',
    storageBucket: 'movies-a4783.appspot.com',
    messagingSenderId: '790483019248'
  };
  firebase.initializeApp(config);
  }
  render() {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    if (this.state.isReady) {
      return (
    <Provider store={createStoreWithMiddleware(reducers)}>
    <Container>
      <RootNavigator />
    </Container>
    </Provider>
      );
     }
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }
}

export default App;
