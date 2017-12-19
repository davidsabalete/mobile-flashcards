import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { yellow } from '../utils/colors';

class CreateDeckView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CreateDeckView</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: yellow,
        flexDirection: 'row',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        padding: 20
    }
});

export default CreateDeckView