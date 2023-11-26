import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import Login_Prototype from './pages/Login_Prototype';
import AccountRecoveryPage from './pages/AccountRecoveryPage';
import AccountRecoveryConfirmation from './pages/AccountRecoveryConfirmationPage';
import HomeWelcome from './pages/HomeWelcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Landing" component={LandingPage}/>
        <Stack.Screen name="Login_Prototype" component={Login_Prototype}/>
        <Stack.Screen name="Signup" component={SignupPage}/>
        <Stack.Screen name="AccountRecovery" component={AccountRecoveryPage}/>
        <Stack.Screen name="Account_Recovery_Confirmation" component={AccountRecoveryConfirmation}/>
        <Stack.Screen name="welcomeHome" component={HomeWelcome}/>
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