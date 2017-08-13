import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Content, Card, Spinner, Text } from 'native-base';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import * as actions from '../actions';
import MovieListItem from '../components/common/MovieListItem';

class MovieList extends Component {
  constructor(props) {
        super(props);
        this.state = { tab: 'movie', movieCount: 0, tvCount: 0, personCount: 0 };
        this.renderRow = this.renderRow.bind(this);
        this.navigateTo = this.navigateTo.bind(this);
    }
componentWillMount() {
    if (this.props.movies) {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.filterMovies(this.props.tab));
    }
}
  componentWillReceiveProps() {
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
navigateTo(movie) {
  this.props.navigation.navigate('MovieShow', movie);
}
renderRow = (movie) => {
return <MovieListItem navigation={this.props.navigation} onPress={(to) => this.navigateTo(to)} movie={movie} />;
}

  render() {
    if (this.props.loading) {
      return (
        <Content>
          <Card>
            <Spinner />
          </Card>
        </Content>
      );
    } else if (this.props.movies && !this.countType(this.props.tab)) {
      return (
          <Content>
            <Card>
            <Text style={{ margin: 5, color: 'red' }} button onPress={this.deneme}>
              Sorry, nothing found.
            </Text>
            </Card>
          </Content>
      );
    }
    return (
      <Content>
      <ListView 
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
    return { movies: state.movies.all,
             loading: state.movies.loading
    };
};

export default withNavigation(connect(mapStateToProps, actions)(MovieList));
