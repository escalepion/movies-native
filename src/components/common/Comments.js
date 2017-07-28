import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem, Left, Thumbnail, Body, Text, Right } from 'native-base';

import * as actions from '../../actions/comments';

class Comments extends Component {   
    componentWillMount() {
        this.props.fetchMovieComments(this.props.movie.id);
    }
    componentWillUnmount() {
        this.props.clearMovieComments();
    }
    render() {
        return (
        <View>
        <List
            dataArray={this.props.comments} renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg' }} />
                </Left>
                <Body>
                  <Text>{data.comment}</Text>
                  <Text numberOfLines={3} note>{data.comment}</Text>
                </Body>
                <Right>
                  <Text note>3.43</Text>
                </Right>
              </ListItem>
        }
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
