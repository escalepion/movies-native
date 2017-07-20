import React from 'react';
import { Button, Text } from 'native-base';

const TabButton = ({ tab, type, info, onPress }) => {
    if (tab === type) {
        return (
        <Button onPress={onPress} bordered primary style={{ borderColor: 'red' }}>
            <Text style={{ color: 'red' }}>
                {info}
            </Text>
        </Button>
    );
    }
    return (
        <Button onPress={onPress} bordered primary>
            <Text>
                {info}
            </Text>
        </Button>
    );
};

export default TabButton;
