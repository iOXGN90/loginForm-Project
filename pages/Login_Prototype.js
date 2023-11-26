import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Landing');
    };
    const forgotPass = () => {
        console.log('forgot password is pressed');
        navigation.navigate('AccountRecovery');
    };
    const gotoSignUp = () => {
        navigation.navigate('Signup');
    };
    const gotoHome =() => {
        navigation.navigate('welcomeHome');
    };
  return (
        <SafeAreaView>
            <View style={styles.navigationBar}>
                <IconButton icon={"arrow-left"} onPress={handleLogin}/>   
            </View>
            <View style={styles.container}>
                <Text style={styles.loginText}>
                    Login
                </Text>
                <TextInput
                    style={styles.loginTextInput}
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.loginTextInput}
                    placeholder='Password'
                    autoCapitalize='none'
                />
                <TouchableOpacity onPress={forgotPass}>
                    <Text style={styles.forgotpassButton}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={gotoHome}>
                    <Text style={styles.loginTextButton}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={styles.signupWrapper}>
                    <Text style={styles.signupInfo}>
                        Don't have an account? 
                    </Text>
                    <TouchableOpacity style={styles.signupButton} onPress={gotoSignUp}>
                        <Text style={styles.signupText}>
                             Sign up now!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    navigationBar:{
        width: '100%',
        height: '5%',
        backgroundColor: '#ffffff',
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '95%',
        width: 'auto',
        backgroundColor: '#ffffff',
    },
    loginText:{
        fontSize: 40,
        width: '50%',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    loginTextInput:{
        fontSize: 20,
        width: '80%',
        margin: 10,
        backgroundColor: 'white'
    },
    forgotpassButton:{
        fontWeight: 'bold',
        textAlign: 'right',
        width: 340,
        marginTop: 10,
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    loginButton:{
        width: 340,
        marginTop: 40,
        padding: 15,
        backgroundColor: '#55bCF6',
        borderRadius: 25,
        elevation: 10,
    },
    loginTextButton:{
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    signupWrapper:{
        marginTop: 25,
        flexDirection: 'row',
    },
    signupInfo:{
        marginRight: 3,
        fontSize: 20,
    },
    signupButton:{

    },
    signupText:{
        color: '#55bCF6',
        fontSize: 20,
        fontWeight: 'bold',
    },
})
// backgroundColor:'#E8EAED', // Gray
// backgroundColor: '#55bCF6', // Blue
export default Login;