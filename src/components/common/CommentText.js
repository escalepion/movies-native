import React, { Component } from 'react';
import { View } from 'react-native';
import { reset, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Card, Form, Item, Input, Button, Text } from 'native-base';

import * as actions from '../../actions/comments';

const renderField = ({ input, placeholder, multiline, numberOfLines, meta: { touched, error } }) => (
  <View>
  <Item placeholderLabel>
    <Input 
    style={{ flex: 1 }} 
    {...input} 
    placeholder={placeholder}
    multiline={multiline}
    numberOfLines={numberOfLines}
    />
  </Item>
  {touched && error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

class CommentText extends Component {
    handleFormSubmit(values) {
       this.props.addComment(values, this.props.movie.id);
    }
    render() {
        const { handleSubmit, addCommentFeedback } = this.props;
        return (
        <Card>
            <Form>
                    <Field 
                        name='comment'
                        placeholder="Ad a comment"
                        component={renderField}
                        multiline
                        numberOfLines={10}
                    />
            </Form>
                    <Button onPress={handleSubmit(this.handleFormSubmit.bind(this))} block style={{ margin: 15, marginTop: 50 }}>
                        <Text>Add Comment</Text>
                    </Button>
                    {addCommentFeedback && <Text style={{ textAlign: 'center', color: 'red' }}>{this.props.addCommentFeedback}</Text>}
        </Card>
        );
    }
}
const afterSubmit = (result, dispatch) => {
  dispatch(reset('addCommentForm'));
};

function validate(values) {
    const errors = {};
    if (!values.comment) {
        errors.comment = 'Pls enter a comment';
    }

    return errors;
}
const styles = {
errorText: {
    fontSize: 10,
    margin: 5,
    color: 'red'
}
};
const addCommentForm = reduxForm({
    form: 'addCommentForm',
    onSubmitSuccess: afterSubmit,
    validate
})(CommentText);

function mapStateToProps(state) {
    return { addCommentFeedback: state.comments.feedback };
}

export default connect(mapStateToProps, actions)(addCommentForm);
