import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

import CommentText from '../components/common/CommentText';
import { TextArea } from '../components/common/TextArea';
import { CardSection } from '../components/common/CardSection';
import { Button } from '../components/common/Button';

class ModalExample extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
      const { cardSectionStyle, containerStyle } = styles;
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight 
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
         </View>
                <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                <TextArea
                value={this.props.not}
                onChangeText={not => this.props.notTut(not)} 
                placeholder="Aklınızda kalmasını istediğiniz bişeyler yazın" 
                />
                </CardSection>

                <CardSection>
                <Button>Ekle</Button>
                <Button>İptal</Button>
                </CardSection>

            </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};
export default ModalExample;
