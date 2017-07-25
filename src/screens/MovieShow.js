import React, { Component } from 'react';
import { Content } from 'native-base';

import MovieDetail from '../components/common/MovieDetail';
import Comments from '../components/common/Comments';

class MovieShow extends Component {
    render() {
        const { movie } = this.props.navigation.state.params;
        console.log(movie);
        return (
            <Content>
                <MovieDetail movie={movie} />
                <Comments movie={movie} />
            </Content>
        );
    }
}

export default MovieShow;
