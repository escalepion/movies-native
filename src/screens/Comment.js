import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, TouchableWithoutFeedback } from 'react-native';
import { reset, reduxForm, Field } from 'redux-form';
import { Card, Button, Input, Item, Form, Spinner } from 'native-base';
import { connect } from 'react-redux';

import * as actions from '../actions/comments';

const renderField = ({ input, placeholder, multiline, numberOfLines, meta: { touched, error } }) => (
  <View>
  <Item placeholderLabel>
    <Input 
    style={{ flex: 1, color: 'white' }} 
    {...input} 
    placeholder={placeholder}
    placeholderTextColor='white'
    multiline={multiline}
    numberOfLines={numberOfLines}
    />
  </Item>
  {touched && error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

class Comment extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
handleFormSubmit(values) {
       this.props.addComment(values, this.props.movie.id);
    }
  render() {
    const { handleSubmit, addCommentFeedback } = this.props;
    console.log(addCommentFeedback);
    if (this.props.commentLoading) {
      return (
        <Modal
          animationType={"slide"}
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => { alert("Modal has been closed.")}}
        >
         <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)}>
        <Card>
          <Spinner />
        </Card>
        </TouchableWithoutFeedback>
        </Modal>
      );
    }
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
         <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)}>
                <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', justifyContent: 'flex-end' }}>
                <Form>
                <Field 
                        name='comment'
                        placeholder="Ad a comment"
                        component={renderField}
                        multiline
                        numberOfLines={2}
                />
               </Form>
              <Button onPress={handleSubmit(this.handleFormSubmit.bind(this))} block style={{ margin: 15, marginTop: 50 }}>
                        <Text style={{ color: 'white' }}>Add comment</Text>
              </Button>
                   
                </Card>
          </TouchableWithoutFeedback>
        </Modal>
      <Card>
        <Button success block onPress={() => this.setModalVisible(true)}>
                <Text style={{ color: 'white' }}>Write a comment</Text>
        </Button>
      </Card>
 {addCommentFeedback && <Text style={{ textAlign: 'center', color: 'red' }}>{this.props.addCommentFeedback}</Text>}
      </View>
    );
  }
}

const styles = {
errorText: {
    fontSize: 10,
    margin: 5,
    color: 'red'
}
};

function validate(values) {
    const errors = {};
    if (!values.comment) {
        errors.comment = 'Pls enter a comment';
    }

    return errors;
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('addCommentForm'));
};

const addCommentForm = reduxForm({
    form: 'addCommentForm',
    onSubmitSuccess: afterSubmit,
    validate
})(Comment);

function mapStateToProps(state) {
    return { 
      addCommentFeedback: state.comments.feedback,
      commentLoading: state.comments.commentSendLoading
    };
}

export default connect(mapStateToProps, actions)(addCommentForm);
