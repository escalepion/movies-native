import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Content, Card, Form, Item, Input, Button, Text, Spinner } from 'native-base';

import * as actions from '../../actions';

const renderField = ({ input, placeholder, keyboardType, secureTextEntry, meta: { touched, error } }) => (
  <View>
  <Item placeholderLabel>
    <Input 
    style={{ flex: 1 }} 
    {...input} 
    keyboardType={keyboardType} 
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    />
  </Item>
  {touched && error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);
 
class LogIn extends Component {
    handleFormSubmit(values) {
        this.props.signInUser(values);
        this.props.setLoginLoading(true);
    }
    render() {
      const { handleSubmit } = this.props;
        return (
        <Content>
            <Card>
          <Form>
            <Field 
            style={{ marginTop: 10 }}
            name='email'
            placeholder="E-mail"
            keyboardType='email-address'
            component={renderField}
            />
            <Field
            secureTextEntry 
            name='password'
            placeholder="Password"
            component={renderField}
            />
          </Form>
          <Button onPress={handleSubmit(this.handleFormSubmit.bind(this))} block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
          {this.props.errorMessage && <Text style={{ textAlign: 'center', color: 'red' }}>{this.props.errorMessage}</Text>}
        { this.props.loading && <Spinner />}
          </Card>
        </Content>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Pls enter a mail adress';
    }
    if (!values.password) {
        errors.password = 'Pls enter a password';
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

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.error, 
        loading: state.auth.loading
    };
}

const LogInForm = reduxForm({
    form: 'login',
    validate
})(LogIn);

export default connect(mapStateToProps, actions)(LogInForm);
