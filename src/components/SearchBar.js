import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item, Input, Icon } from 'native-base';

import * as Actions from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

handleOnChange(event) {
  this.setState({ term: event.target.value });
}
handlePress() {
  if (this.state.term !== '') {
  this.props.navigation.navigate('MovieList');
  this.props.fetchMovies(this.state.term);
  }
}
  render() {
    return (
          <Item rounded>
            <Icon button name="search" onPress={this.handlePress.bind(this)} />
            <Input
            onSubmitEditing={this.handlePress.bind(this)} 
            value={this.state.term} 
            placeholder="Search a movie" 
            onChangeText={(term) => this.setState({ term })} 
            />
          </Item>
    );
  }
}

export default connect(null, Actions)(SearchBar);
