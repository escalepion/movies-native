import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Container, Spinner } from 'native-base'; 

import { userLoggedIn, userLoggedOut, fetchCurrentUser } from './src/actions';
import { createRootNavigator } from './src/navigation/routes';

class ProviderApp extends React.Component {
  state = {
    loading: true
  }
componentWillMount() {
const config = {
    apiKey: 'AIzaSyDJcXKuZI13TUWzKK6kXdZA3Gxu1XuvMNk',
    authDomain: 'movies-a4783.firebaseapp.com',
    databaseURL: 'https://movies-a4783.firebaseio.com',
    projectId: 'movies-a4783',
    storageBucket: 'movies-a4783.appspot.com',
    messagingSenderId: '790483019248'
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.userLoggedIn();
        this.props.fetchCurrentUser(firebase.auth().currentUser.uid);
        this.setState({ loading: false });
      } else {
        this.props.userLoggedOut();
        this.setState({ loading: false });
      }
    });
  }
  render() {
    firebase.auth().currentUser ? console.log(firebase.auth().currentUser.uid) : console.log('no user');
      const RootNavigator = createRootNavigator(this.props.userLogged);
    if (this.state.loading) {
      return (
        <Container>
          <Spinner />
        </Container>
      );
    }
    return (
  <Container>
    <RootNavigator />
  </Container>
  );
  }
}

function mapStateToProps(state) {
  return { userLogged: state.auth.userLogged };
}
export default connect(mapStateToProps, 
  { 
    userLoggedIn, 
    userLoggedOut, 
    fetchCurrentUser 
  })(ProviderApp);
