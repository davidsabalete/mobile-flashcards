import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { blue } from './utils/colors';
import MainNavigator from './router';
import store from './store';

const FlashcardStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashcardStatusBar backgroundColor={blue} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}