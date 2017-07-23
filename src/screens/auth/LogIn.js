import React, { Component } from 'react';
import { View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { Content, Form, Item, Input, Button, Text } from 'native-base';

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
    handleOnPress() {
        this.props.navigation.navigate('SignUp');
    }
    render() {
      const { handleSubmit } = this.props;
        return (
        <Content>
          <Form>
            <Field 
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
          <Button onPress={handleSubmit(this.handleOnPress.bind(this))} block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
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

const LogInForm = reduxForm({
    form: 'login',
    validate
})(LogIn);

export default LogInForm;
