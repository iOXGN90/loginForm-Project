import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton, TextInput } from 'react-native-paper';


const AccountRecoveryPage = () => {
    const navigation = useNavigation();
    const sendRestorePassword = () => {
        console.log('Reset password has been sent to your email address!')
        navigation.navigate('Account_Recovery_Confirmation')
    }
    const goBack = () => {
        navigation.pop();
    }
    const backToLogin =() => {
        navigation.navigate('Login_Prototype');
    }
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.navigationBar}>
            <IconButton icon={"arrow-left"} onPress={goBack}/>   
        </TouchableOpacity>
        <View style={styles.contentWrapper}>
            <Text style={styles.restorePasswordHeadline}>
                Restore Password
            </Text>
            <TextInput 
                style={styles.loginTextInput} 
                placeholder='Email Address' 
                autoCapitalize='none'
            />
            <TouchableOpacity style={styles.sendResetButton} onPress={sendRestorePassword}>
                <Text style={styles.sendResetText}>
                    SEND RESET INSTRUCTIONS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavigationBar} onPress={backToLogin}>
                <IconButton icon={"arrow-left"} onPress={goBack}/>  
                <Text style={styles.backToLoginText}>
                    Back to login
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '95%',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    navigationBar:{
        width: '100%',
        height: '5%',
        backgroundColor: '#ffffff',
    },
    contentWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '90%',
    },
    restorePasswordHeadline:{
        marginBottom: 50,
        fontSize: 35,
    },
    loginTextInput:{
        backgroundColor: '#ffffff',
        width: '80%',
        fontSize: 25,
    },
    sendResetButton:{
        width: '80%',
        marginTop: 50,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: '#55bCF6',
        borderRadius: 25,
        elevation: 10,
        height: 70,
    },
    sendResetText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    },
    bottomNavigationBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        width: '80%',
        marginTop: 30,
    },
    backToLoginText:{
        fontSize: 20,
        marginBottom:5,
    },
})
// backgroundColor:'#E8EAED', // Gray
// backgroundColor: '#55bCF6', // Blue

export default AccountRecoveryPage;