import React, { Component } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import { Card, Button, Text } from 'native-base';

class CommentModal extends Component {
    render() {
        const { visible, onModalPress, movie, comment, onButtonPress } = this.props;
        return (
            <Modal
            animationType={'slide'}
            transparent
            visible={visible}
            onRequestClose={() => {}}
            >
            <TouchableWithoutFeedback onPress={onModalPress}>
                <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', justifyContent: 'center' }}>
                <Button onPress={() => onButtonPress(movie.id, comment)} warning style={{ alignSelf: 'center' }}>
                    <Text>
                        Want to delete this comment?
                    </Text>
                </Button>
                </Card>
            </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

export default CommentModal;
