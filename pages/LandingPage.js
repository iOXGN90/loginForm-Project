import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LandingPage() {
    const navigation = useNavigation();
    const handleLoginPress = () => {
    // Navigate to the Login page
    navigation.navigate('Login_Prototype')
    };
    const handleSignupPress = () => {
    navigation.navigate('Signup')
    };

  return (

    <View style={styles.container}>
        <Text style={styles.welcomeText}>
            Hello, welcome to our application!
        </Text>
        <View style={styles.loginsignup}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                <Text style={styles.loginText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
                <Text style={styles.SignupText}>
                    Signup
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    loginsignup:{
        marginTop: 15,
    },
    welcomeText:{
        fontSize: 30,
        width: 300,
        textAlign: 'center',
    },
    loginButton:{
        marginTop: 20,
        width: 250,
        height: 55,
        padding: 10,
        textAlign: 'center',
        backgroundColor:'#55bCF6',
        color:'#FFFFFF',
        fontSize: 25,
        borderRadius: 25,
        shadowColor:'black',
        shadowOffset:{width: 0, height: 100},
        elevation: 5,
    },
    signupButton:{
        marginTop: 20,
        width: 250,
        height: 55,
        padding: 10,
        display: 'flex',
        textAlign: 'center',
        borderRadius: 25,
        shadowOffset:{width: 0, height: 100},
        elevation: 3,
        backgroundColor:'#E8EAED',
    },
    loginText:{
        textAlign: 'center',
        color:'#FFFFFF',
        fontSize: 25,
    },
    SignupText:{
        textAlign: 'center',
        color:'black',
        fontSize: 25,
    }
}
)
export default LandingPage;