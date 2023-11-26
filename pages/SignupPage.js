import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const LoginPage = () => {

  const navigation = useNavigation();

  const goBack = () =>{
    navigation.pop();
  };
  const goLogin =() =>{
    navigation.navigate('Login_Prototype')
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={goBack}>
          <IconButton icon={"arrow-left"}/>                 
        </TouchableOpacity>
      </View>

        <View style={styles.Body}>
          <Text style={styles.createAccountText}>
            Create Account
          </Text>
          <TextInput
            style={styles.signupTextInput}
            placeholder='Name'
            autoCapitalize='sentences'
          />
          <TextInput
            style={styles.signupTextInput}
            placeholder='Email'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.signupTextInput}
            placeholder='Password'
            autoCapitalize='none'
          />
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>
              Sign up
            </Text>
          </TouchableOpacity>
          <View style={styles.Bottom}>
            <Text style={styles.loginInfo}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={goLogin}>
              <Text style={styles.loginButton}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container:{
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  Header:{
    height: '5%',
  },
  Body:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '95%',
  },
  createAccountText:{
    fontSize: 40,
  },
  signupTextInput:{
    marginTop: 30,
    fontSize: 20,
    width: '80%',
    padding: 5,
    backgroundColor: '#ffffff',
  },
  signupButton:{
    width: '80%',
    padding: 15,
    marginTop: 40,
    backgroundColor: '#55bCF6',
    borderRadius: 25,
    elevation: 10,

  },
  signupText:{ 
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  Bottom:{
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginInfo:{
    marginRight: 3,
    fontSize: 20,
  },
  loginButton:{
    color: '#55bCF6',
    fontSize: 20,
    fontWeight: 'bold',
    elevation: 5,

  },
})

export default LoginPage;