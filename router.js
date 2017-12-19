
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import DeckListView from './components/DeckListView';
import CreateDeckView from './components/CreateDeckView';
import IndividualDeckView from './components/IndividualDeckView';
import { white, blue, purple, pink, yellow } from './utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Tabs = TabNavigator({
    Decks: {
        screen: DeckListView,
        navigationOptions: {
            tabBarLabel: 'All Decks',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-home' size={30} color={tintColor} />
        }
    },
    AddEntry: {
        screen: CreateDeckView,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        }
    }
}, {
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: yellow,
            style: {
                height: 56,
                backgroundColor: purple,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    });


const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    Detail: {
        screen: IndividualDeckView,
        navigationOptions: {
            title: 'Detail',
            headerTintColor: blue,
            headerStyle: {
                backgroundColor: purple
            }
        }
    }
})

export default MainNavigator