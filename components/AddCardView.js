import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { blue, red, white, yellow, gray, purple } from '../utils/colors';
import Button from './Button';
import { addCardToStorage } from '../actions';

class AddCardView extends Component {

    state = {
        question: '',
        answer: ''
    }

    addCard = () => {
        const { navigation, addCard } = this.props;
        const deck = navigation.state.params.deck.title;
        addCard(deck, this.state);
        this.setState({
            question: '',
            answer: ''
        });
    }

    handleChangeQuestion = (question) => {
        this.setState({ question });
    }

    handleChangeAnswer = (answer) => {
        this.setState({ answer });
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text
                        style={styles.label}>Question: </Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your question here!"
                        value={this.state.question}
                        onChangeText={this.handleChangeQuestion} />
                    <Text
                        style={styles.label}>Answer: </Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your answer here!"
                        value={this.state.answer}
                        onChangeText={this.handleChangeAnswer} />
                    <Button title="Save Card"
                        style={styles.btn}
                        textColor={{ color: yellow }}
                        onPress={this.addCard}
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white
    },
    label: {
        fontSize: 18,
        color: 'black',
        padding: 5,
        textAlign: 'left'
    },
    inputText: {
        height: 50,
        fontSize: 24,
        textAlign: 'left',
        marginBottom: 20
    },
    btn: {
        padding: 20, 
        marginBottom: 20
    }
});

const mapDispatchToProps = (dispatch) => ({
    addCard: (deck, card) => dispatch(addCardToStorage(deck, card))
});

export default connect(null, mapDispatchToProps)(AddCardView);