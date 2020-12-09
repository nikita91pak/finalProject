import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Signin from '../screens/Signin'
import HomeScreenRoute from './HomeScreenRoute'
const MenuRoute = () => {

  const SigninScreen = (props) => <Signin {...props} />
  const HomeScreen = (props) => <HomeScreenRoute {...props} />
  const Drawer = createDrawerNavigator();

  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="SigninScreen" component={SigninScreen} />
      </Drawer.Navigator>
  );
};

export default MenuRoute;

const styles = StyleSheet.create({});
