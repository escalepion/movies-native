import React, { Component } from 'react';
import { Content } from 'native-base';

import MovieDetail from '../components/common/MovieDetail';
import Comments from '../components/common/Comments';
import Comment from './Comment';

class MovieShow extends Component {
    render() {
        const { movie } = this.props.navigation.state.params;
        return (
            <Content>
                <MovieDetail movie={movie} />
                <Comments movie={movie} />
                <Comment movie={movie} />
            </Content>
        );
    }
}

export default MovieShow;
