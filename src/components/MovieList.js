import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Content, Spinner, Text } from 'native-base';
import { connect } from 'react-redux';

import * as actions from '../actions';
import MovieListItem from '../components/common/MovieListItem';

class MovieList extends Component {
  constructor(props) {
        super(props);
        this.state = { tab: 'movie', movieCount: 0, tvCount: 0, personCount: 0 };
    }
componentWillMount() {
    if (this.props.movies) {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.filterMovies(this.props.tab));
    }
}
  componentWillUpdate() {
    if (this.props.movies) {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.filterMovies(this.props.tab));
    }
}
filterMovies(type) {
  const newArray = this.props.movies.filter(movie => movie.media_type === type);
  return newArray;
}
countType(type) {
        const countTypes = this.props.movies.filter(movie => movie.media_type === type);
        return countTypes.length;
    }
renderRow(movie) {
return <MovieListItem movie={movie} />;
}

  render() {
    if (this.props.loading) {
      return (
      <Container>
        <Content>
          <Spinner />
        </Content>
      </Container>
      );
    } else if (this.props.movies && !this.countType(this.props.tab)) {
      return (
        <Container>
          <Content>
            <Text>
              Sorry, no movies found.
            </Text>
          </Content>
        </Container>
      );
    }
    return (
    <Container>
      <Content>
      <ListView 
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
      </Content>
    </Container>
    );
  }
}

const mapStateToProps = (state) => {
    return { movies: state.movies.all,
             loading: state.movies.loading
    };
};

export default connect(mapStateToProps, actions)(MovieList);
