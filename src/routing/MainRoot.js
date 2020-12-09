import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/Signin';
import HomeScreenRoute from './HomeScreenRoute'
const MainRoot = (props) => {

 const SignScreen = (props) =>  <Signin {...props}/>
 const HomeScreen = (props) =>  <HomeScreenRoute {...props}/>
 const Stack = createStackNavigator();
    return (
        <NavigationContainer screenOptions={{cardStyle: { backgroundColor: 'transparent' }}} initialRouteName="Signin">
           <Stack.Navigator>
             <Stack.Screen name="Signin" options={{headerShown: false,backgroundStyle: 'white'}} component={SignScreen}/>
             <Stack.Screen name="Home" component={HomeScreen}/>
           </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoot

const styles = StyleSheet.create({})
