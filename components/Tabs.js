import React from 'react';
import { TabNavigator } from 'react-navigation';
import DeckListView from './DeckListView';
import CreateDeckView from './CreateDeckView';
import { purple, yellow } from '../utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Tabs = TabNavigator({
    DeckList: {
        screen: DeckListView,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: () => <FontAwesome name='th-list' size={30} />
        }
    },
    CreateDeck: {
        screen: CreateDeckView,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: () => <FontAwesome name='plus' size={30} />
        }
    }
}, {
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: yellow,
            activeBackgroundColor: purple,
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
    }, {
        navigationOptions: {
            header: null
        }
    });

export default Tabs;