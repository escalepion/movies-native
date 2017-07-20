import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import { connect } from 'react-redux';

import * as actions from '../actions';
import SearchBar from '../components/SearchBar';
import MovieListItem from '../components/common/MovieListItem';
import TabButton from '../components/common/TabButton';

class MovieList extends Component {
  constructor(props) {
        super(props);
        this.state = { tab: 'movie', movieCount: 0, tvCount: 0, personCount: 0 };
    }

  countType(type) {
        const countTypes = this.props.movies.filter(movie => movie.media_type === type);
        return countTypes.length;
    }

  listTabs() {
        if (this.props.movies && this.props.movies.length) {
            return (
                <View style={styles.tabsContainer}>
                    <TabButton tab={this.state.tab} type='movie' info='Movies' onPress={() => this.setState({ tab: 'movie' })} />
                    <TabButton tab={this.state.tab} type='tv' info='Tv Shows' onPress={() => this.setState({ tab: 'tv' })} />
                    <TabButton tab={this.state.tab} type='person' info='Persons' onPress={() => this.setState({ tab: 'person' })} />
                </View> 
            );
        }
    }

  listMovies() {
        if (this.props.movies) {
        return this.props.movies.map(movie => {
            return (
                <MovieListItem tab={this.state.tab} key={movie.id} movie={movie} />
            );
        });
        }
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
    }
    return (
    <Container>
      <Content padder>
        <SearchBar />
        {this.listTabs()}
        {this.listMovies()}
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

const styles = StyleSheet.create({
  tabsContainer: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


export default connect(mapStateToProps, actions)(MovieList);
