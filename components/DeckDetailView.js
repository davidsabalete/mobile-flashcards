import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { blue, red, white, yellow, gray, purple } from '../utils/colors';
import Button from './Button';

class DeckDetailView extends Component {

    goToAddCard = () => {
        const { navigation, deck } = this.props;
        navigation.navigate('AddCard', { deck: deck });
    }

    goToQuiz = () => {
        const { navigation, deck } = this.props;
        navigation.navigate('QuizView', { deck: deck });
    }

    render() {
        const { deck } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.headerText}>{deck.title}</Text>
                    <Text style={styles.cardText}> {deck.questions.length} cards </Text>
                    <Button title="Add Cards" onPress={this.goToAddCard} style={styles.addCardBtn} textColor={{ color: 'black' }} />
                    <Button title="Start Quiz" onPress={this.goToQuiz} />
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
    headerText: {
        fontSize: 40,
        padding: 20,
        paddingBottom: 0,
        textAlign: 'center'
    },
    cardText: {
        fontSize: 30,
        textAlign: 'center',
        padding: 20,
        marginBottom: 20,
        color: gray
    },
    addCardBtn: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 2,
        marginBottom: 20
    }
});

const mapStateToProps = (state, ownProps) => {
    const deck = ownProps.navigation.state.params;
    if (typeof deck === 'object') {
        return {
            deck: state[deck.deck.title]
        }
    } else {
        return {
            deck: state[deck]
        }
    }
}

export default connect(mapStateToProps)(DeckDetailView);