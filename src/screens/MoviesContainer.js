import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import * as actions from '../actions';


import MovieList from '../components/MovieList';

const FirstRoute = () => <MovieList tab={'movie'} />;
const SecondRoute = () => <MovieList tab={'tv'} />;
const ThirdRoute = () => <MovieList tab={'person'} />;

class MoviesContainer extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Movies' },
      { key: '2', title: 'Tv Shows' },
      { key: '3', title: 'Persons' },
    ],
  };

  handleIndexChange = (index) => {
    this.setState({ index });
    this.props.selectMovieTab(index);
  }

  renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: ThirdRoute,
  });

  renderHeader = props => <TabBar {...props} />;

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onRequestChangeTab={this.handleIndexChange}
        // onIndexChange={this.handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
   return {
     selectedTab: state.movies.selectedTab
   };
};

export default connect(mapStateToProps, actions)(MoviesContainer);

