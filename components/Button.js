import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { purple, white, gray } from '../utils/colors';

export default function Button({ onPress, title, style, textColor, disabled }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.submitBtn, style, disabled ? styles.btnDisabled : '']} 
                onPress={onPress} 
                disabled={disabled}
                >
                <Text style={[styles.submitBtnText, disabled ? styles.btnTextDisabled : textColor]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        alignSelf: 'center',
        marginTop: 20
    },
    submitBtn: {
        borderRadius: 5,
        backgroundColor: purple,
        alignContent: 'center',
        padding: 20,
    },
    submitBtnText: {
        textAlign: 'center',
        color: white,
        fontSize: 20,
    },
    btnTextDisabled: {
        color: white
    },
    btnDisabled: {
        backgroundColor: '#ccc'
    }
})