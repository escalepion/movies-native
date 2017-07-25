import _ from 'lodash';
import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../actions/comments';
import CommentContainer from './CommentContainer';

class Comments extends Component {   
    componentWillMount() {
        this.props.fetchMovieComments(this.props.movie.id);
        const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.comments);
    }
    componentWillReceiveProps(nextProps) {
        const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(nextProps.comments);
    }
    componentWillUnmount() {
        this.props.clearMovieComments();
    }
    renderRow = (comment) => {
return <CommentContainer key={comment.uid} comment={comment} />;
}
    render() {
        return (
        <View>
            <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />
        </View>
        );
    }
}

function mapStateToProps(state) {
    const comments = _.map(state.comments.movieComments, (val, uid) => {
        return { ...val, uid };
    });
    return { comments };
}

export default connect(mapStateToProps, actions)(Comments);
