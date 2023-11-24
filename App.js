import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Login from './pages/Login_Prototype';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login_Protoptype" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Landing" component={LandingPage}/>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="Signup" component={SignupPage}/>
        <Stack.Screen name="Login_Prototype" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// backgroundColor:'#E8EAED', // Gray
// backgroundColor: '#55bCF6', // Blue