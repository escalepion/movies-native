import React from 'react';
import Expo from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Container, Text } from 'native-base'; 

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
        <Text>Font loading.</Text>
      </Container>
    );
  }
}

export default App;
