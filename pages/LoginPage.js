import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleForgotPassword = () => {
    // Handle logic for forgot password
    console.log('Forgot Password clicked!');
  };

  const handleLogin = () => {
    // Handle logic for login
    console.log('Login clicked!');
    // Navigate to LandingPage when login is successful
    navigation.navigate('Landing'); // Use pop to go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginPage.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      {/* You can use any back arrow icon/image here */}
      <Text style={styles.backArrow}>{'<'}</Text>
    </TouchableOpacity>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 300,
  },
  forgotPassword: {
    color: 'blue',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#55bCF6',
    padding: 15,
    width: 100,
    marginTop: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    textAlign:'center',
  },
  backArrow: {
    padding: 50,
    marginLeft: 10,
    fontSize: 20,
    color: 'black', // You can set the color or use an image for the arrow
  },
});

export default LoginPage;
