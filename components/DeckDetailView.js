import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { blue, red, white, yellow, gray, purple, black } from '../utils/colors';
import Button from './Button';

class DeckDetailView extends Component {

    state = {
        isEnabled: false
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.deck.title + ' Deck Detail'
    });

    componentDidMount() {
        const { deck } = this.props;
        if (deck.questions.length > 0) {
            this.setState({ isEnabled: true });
        }
    }

    goToAddCard = () => {
        const { navigation, deck } = this.props;
        navigation.navigate('AddCard', { deck: deck });
    }

    goToQuiz = () => {
        const { navigation, deck } = this.props;
        navigation.navigate('Quiz', { deck: deck });
    }

    render() {
        const { deck } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.headerText}>{deck.title}</Text>
                    <Text style={styles.cardText}> {deck.questions.length} cards </Text>
                    <Button title="Add Card"
                        style={styles.btn}
                        textColor={{ color: yellow }}
                        onPress={this.goToAddCard}
                    />
                    <Button title="Start Quiz"
                        textColor={{ color: yellow }}
                        onPress={this.goToQuiz}
                        disabled={!this.state.isEnabled}
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
        color: gray
    },
    btn: {
        marginTop: 20
    }
});

const mapStateToProps = (state, ownProps) => {
    const { deck } = ownProps.navigation.state.params;
    if (typeof deck === 'object') {
        return {
            deck: state[deck.title]
        }
    } else {
        return {
            deck: state[deck]
        }
    }
}

export default connect(mapStateToProps)(DeckDetailView);