import React, { Component } from 'react';
import { Content } from 'native-base';

import MovieDetail from '../components/common/MovieDetail';
import Comments from '../components/common/Comments';
import Comment from './Comment';
import CommentText from '../components/common/CommentText';

class MovieShow extends Component {
    render() {
        const { movie } = this.props.navigation.state.params;
        console.log(movie);
        return (
            <Content>
                <MovieDetail movie={movie} />
                <Comments movie={movie} />
                <Comment movie={movie} />
                <CommentText movie={movie} />
            </Content>
        );
    }
}

export default MovieShow;
