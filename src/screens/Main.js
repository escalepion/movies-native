import React, { Component } from 'react';
import { Content } from 'native-base';

import SearchBar from '../components/SearchBar';

class MovieList extends Component {
  
  render() {
      const { navigation } = this.props;
    return (
      <Content padder>
        <SearchBar navigation={navigation} />
      </Content>
    );
  }
}

export default MovieList;
