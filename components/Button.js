import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { purple, white } from '../utils/colors';

export default function Button({ onPress, title, style, textColor }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={[styles.submitBtn, style]}>
                <Text style={[styles.submitBtnText, textColor]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        alignSelf: 'center'
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
    }
})