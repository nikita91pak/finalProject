import 'react-native-gesture-handler'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MainRoot from './src/routing/MainRoot'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => (
  <View style={styles.conatiner}>
      <MainRoot />
  </View>
);

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default App;
