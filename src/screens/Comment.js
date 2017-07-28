import React, { Component } from 'react';
import { Modal, View, Text } from 'react-native';

class Comment extends Component {
    render() {
        return (
            <Modal
            onRequestClose={() => {}}
            >
                <View>
                    <Text>
                    tatataa
                    </Text>
                </View>
            </Modal>
        );
    }
}

export default Comment;
