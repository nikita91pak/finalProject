import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen'
import Map from '../screens/Map'

import { optionBottomTabHome } from './configfile'
const HomeScreenRoute = ({route}) => {
  const HomeScreen = (props) => <Home {...props} params={route.params}/>
  const MapScreen = (props) => <Map {...props} />

  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator screenOptions={optionBottomTabHome}>
        <Tab.Screen name="TabHome"  component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
  );
};

export default HomeScreenRoute;

const styles = StyleSheet.create({});
