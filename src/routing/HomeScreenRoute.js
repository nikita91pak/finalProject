import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen'
import Map from '../screens/Map'
const HomeScreenRoute = () => {
  const HomeScreen = (props) => <Home {...props} />
  const MapScreen = (props) => <Map {...props} />
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
  );
};

export default HomeScreenRoute;

const styles = StyleSheet.create({});
