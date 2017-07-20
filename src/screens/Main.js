import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import SearchBar from '../components/SearchBar';

class MovieList extends Component {
  render() {
      const { navigation } = this.props;
    return (
    <Container>
      <Content padder>
        <SearchBar navigation={navigation} />
      </Content>
    </Container>
    );
  }
}

export default MovieList;
