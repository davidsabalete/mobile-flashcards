import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { purple } from './utils/colors';

const FlashcardStatusBar = ({ backgroundColor, ...props }) => (
  <View>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <FlashcardStatusBar backgroundColor={purple} barStyle={light - content} />
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
