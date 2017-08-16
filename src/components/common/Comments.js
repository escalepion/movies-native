// import _ from 'lodash';
import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Card, List, ListItem, Left, Thumbnail, Body, Text, Right } from 'native-base';

import * as actions from '../../actions/comments';
import CommentModal from '../comment_modal';

class Comments extends Component {   
    constructor(props) {
        super(props);
        this.state = { 
            modalVisible: false,
            selectedComment: null 
        };
    }
    componentWillMount() {
        this.props.fetchMovieComments(this.props.movie.id);
    }
    componentWillUnmount() {
        this.props.clearMovieComments();
    }
    onModalPress() {
        this.setModalVisible(false);
    }
    onButtonPress(movieId, commentId) {
        this.props.deleteComment(movieId, commentId);
        this.setModalVisible(false);
    }
    setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    }

    popUpDelete(commentId) {
        this.setModalVisible(true);
        this.setState({ selectedComment: commentId });
    }
    render() {
        if (this.props.removeMessage) { console.log(this.props.removeMessage); }
        console.log('comments: ', this.props.comments);
        if (this.props.comments.length === 0) {
            return (
                <Card>
                    <Text style={{ margin: 5, color: 'red' }} button onPress={this.deneme}>
                        No comments found.
                    </Text>
                </Card>
            );
        }
        return (
        <Card>
        <List
            dataArray={this.props.comments} 
            renderRow={data =>
            <TouchableWithoutFeedback onLongPress={() => this.popUpDelete(data.uid)}>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg' }} />
                </Left>
                <Body>
                  <Text numberOfLines={3} note>{data.name}</Text>
                  <Text>{data.comment}</Text>
                </Body>
              </ListItem>
            </TouchableWithoutFeedback>
        }
        />
        <CommentModal 
        movie={this.props.movie} 
        comment={this.state.selectedComment} 
        onModalPress={this.onModalPress.bind(this)} 
        visible={this.state.modalVisible}
        onButtonPress={(movieId, commentId) => this.onButtonPress(movieId, commentId)} 
        />
        </Card>
        );
    }
}

function mapStateToProps(state) {
    // const comments = _.map(state.comments.movieComments, (val, uid) => {
    //     return { ...val, uid };
    // });
    const comments = state.comments.commentsArray;
    return { comments, removeMessage: state.comments.removeMessage };
}

export default connect(mapStateToProps, actions)(Comments);
