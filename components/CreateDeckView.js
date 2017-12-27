import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { yellow } from '../utils/colors';
import Button from './Button';
import { addDeck, addDeckToStorage } from '../actions';

class CreateDeckView extends Component {
    state = {
        newDeck: ''
    }

    handleChangeText = (text) => {
        this.setState({ newDeck: text });
    }

    createDeck = () => {
        const { newDeck } = this.state;
        const { addDeck, navigation } = this.props;
        this.setState({ newDeck: '' });
        addDeck(newDeck);
        navigation.navigate('DeckDetail', { deck: { title: newDeck } });
    }

    render() {
        return (
            <KeyboardAvoidingView behaviour='padding' style={styles.container}>
                <Text style={styles.headerText}>Enter new deck title:</Text>
                <TextInput style={styles.inputText}
                    placeholder='Deck title here!'
                    onChangeText={this.handleChangeText}
                    value={this.state.newDeck}
                />
                <Button title="Create Deck"
                    textColor={{ color: yellow }}
                    onPress={this.createDeck}
                    />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 32,
        padding: 20,
        textAlign: 'center'
    },
    inputText: {
        height: 50,
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    }
});

const mapDispatchToProps = (dispatch) => ({
    addDeck: (newDeck) => dispatch(addDeckToStorage({
        newDeck
    }))
})

export default connect(null, mapDispatchToProps)(CreateDeckView);