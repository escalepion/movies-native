import React, { Component } from 'react';
import { Content, Form, Item, Input, Button, Text } from 'native-base';

class LogIn extends Component {
    handleOnPress() {
        this.props.navigation.navigate('SignUp');
    }
    render() {
        return (
        <Content>
          <Form>
            <Item placeholderLabel>
              <Input style={{ flex: 1 }} placeholder="Username" />
            </Item>
            <Item last placeholderLabel>
              <Input style={{ flex: 1 }} placeholder="Password" />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
        </Content>
        );
    }
}

export default LogIn;
