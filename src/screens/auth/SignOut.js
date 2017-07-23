import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Button, Text } from 'native-base';

import * as actions from '../../actions';

class SignOut extends Component {
    componentWillMount() {
        this.props.userLoggedOut();
    }
    render() {
        return (
            <Content>
                <Button>
                    <Text>
                        You are logging out
                    </Text>
                </Button>
            </Content>
        );
    }
}

export default connect(null, actions)(SignOut);