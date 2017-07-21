import React, { Component } from 'react';
import { Content } from 'native-base';

import MovieDetail from '../components/common/MovieDetail';

class MovieShow extends Component {
    render() {
        const { movie } = this.props.navigation.state.params;
        return (
            <Content>
                <MovieDetail movie={movie} />
            </Content>
        );
    }
}

export default MovieShow;
