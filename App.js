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
import Signin from './src/screens/Signin';
import Map from './src/screens/Map'
import HomeScreen from './src/screens/HomeScreen'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => (
  <View style={styles.conatiner}>
      <HomeScreen />
  </View>
);

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingHorizontal: 8,
    marginTop: 50,

  }
});

export default App;
