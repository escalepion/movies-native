import React from 'react';
import { View, TextInput } from 'react-native';

const TextArea = ({ placeholder, onChangeText, value, onFocus }) => {
    return (
        <View style={styles.containerStyle}>
            <TextInput
            onFocus={onFocus}
            value={value}
            style={styles.inputStyle} 
            placeholder={placeholder}
            multiline
            onChangeText={onChangeText}
            /> 
        </View>
    );
};
const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputStyle: {
        height: 150,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
};

export { TextArea };
