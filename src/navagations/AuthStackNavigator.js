import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import  SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import StartQuiz from '../screens/StartQuiz';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
