import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { purple, white } from './utils/colors';
import { StackNavigator, TabNavigator } from 'react-navigation';
import DeckListView from './components/DeckListView';
import IndividualDeckView from './components/IndividualDeckView';
import CreateDeckView from './components/CreateDeckView';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const FlashcardStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const Tab = TabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'List',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  CreateDeck: {
    screen: CreateDeckView,
    navigationOptions: {
      tabBarLabel: 'Create',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple: white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white: purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tab
  },
  Detail: {
    screen: IndividualDeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <FlashcardStatusBar backgroundColor={purple} barStyle='light-content' />
          <Text>hola 1</Text>
          <MainNavigator />
          <Text>adios</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
