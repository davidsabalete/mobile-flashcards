import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { yellow } from '../utils/colors';
import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions';

class DeckListView extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        fetchDecks()
            .then(decks => {
                console.log(JSON.stringify(decks))
                return dispatch(receiveDecks(decks))
            })
            .catch(error => console.log(error))
    }

    renderItem = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => alert('hola')}>
                <Text>Deck item</Text>
                {/* <SingleDeck title={item.title} questions={item.card} /> */}
            </TouchableOpacity>
        </View>
    );

    render() {
        let data = Object.values(this.props.decks).sort(
            (a, b) => a.title > b.title,
        )

        return (
            <View style={styles.container}>
                <Text>DeckListView 2</Text>
                <FlatList data={data} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: yellow,
        flexDirection: 'row',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        padding: 20,
    },
    item: {
        width: 400,
        margin: 0,
        padding: 0,
    }
});

const mapStateToProps = (state, ownProps) => ({
    decks: state,
    navigate: ownProps.navigation.navigate
});

export default connect(mapStateToProps)(DeckListView);