import React, { Component } from 'react';
import Expo from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Container, Content, Spinner } from 'native-base';

import ProviderApp from './ProviderApp';
import reducers from './src/reducers';

console.ignoredYellowBox = ['Setting a timer'];

class App extends Component {
     state = {
    isReady: false,
   }
async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf') 
  });
  this.setState({ isReady: true });
}
  render() {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    if (this.state.isReady) {
    return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <ProviderApp />
    </Provider>
    );
    } 
    return (
      <Container>
        <Content>
          <Spinner />
        </Content>
      </Container>
    );
  }
}

export default App;
