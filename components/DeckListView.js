import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { blue, red, white, yellow } from '../utils/colors';
import { receiveDecks, getDecksFromStorage } from '../actions';
import DeckListItem from './DeckListItem';
import Button from './Button';

class DeckListView extends Component {

    componentDidMount() {
        const { getDecks } = this.props;
        getDecks();
    }

    goToCreateDeck = () => {
        const { navigation } = this.props;
        navigation.navigate('CreateDeck');
    }

    render() {
        const { decks } = this.props;
        return (
            <ScrollView>
                {decks !== null ? Object.keys(decks).map(deck => (
                    <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate(
                        'DeckDetail',
                        { deck: { title: deck } }
                    )} key={deck} >
                        <View>
                            <Text style={styles.headerText}>{decks[deck].title}</Text>
                            <Text style={styles.cardText}>{decks[deck].questions.length} cards</Text>
                        </View>
                    </TouchableOpacity>
                )) :
                    <TouchableOpacity>
                        <View>
                            <Text style={styles.headerText}>You haven't made any deck!</Text>
                            <Button title="Create Deck Here!" onPress={this.goToCreateDeck} />
                        </View>
                    </TouchableOpacity>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: blue,
    },
    headerText: {
        padding: 20,
        fontSize: 30,
        textAlign: 'center'
    },
    cardText: {
        paddingBottom: 20,
        fontSize: 20,
        color: white,
        textAlign: 'center'
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: red
    },
    deck: {
        margin: 10,
        padding: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: blue,
        backgroundColor: yellow
    }
});

const mapStateToProps = (state) => ({
    decks: state
});

const mapDispatchToProps = (dispatch) => ({
    getDecks: () => dispatch(getDecksFromStorage())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);