import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Container } from 'native-base'; 

import reducers from './src/reducers';
import { RootNavigator } from './src/navigation/routes';

class App extends React.Component {
  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  }
  render() {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    return (
    <Provider store={createStoreWithMiddleware(reducers)}>
    <Container>
      <RootNavigator />
    </Container>
    </Provider>
    );
  }
}

export default App;
