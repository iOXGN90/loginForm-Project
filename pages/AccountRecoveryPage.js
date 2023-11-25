import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton, TextInput } from 'react-native-paper';


const AccountRecoveryPage = () => {
    const navigation = useNavigation();

    const goBack = () => {
    navigation.pop();
};
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.navigationBar}>
            <IconButton icon={"arrow-left"} onPress={goBack}/>   
        </TouchableOpacity>
        <View>
            <Text>
                Restore your password
            </Text>
            <TextInput
                    style={styles.loginTextInput}
                    placeholder='Email'
                    autoCapitalize='none'
                />
            <TouchableOpacity>
                <Text>
                    Send Reset Instructions
                </Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bottomNavigationBar}>
            <IconButton icon={"arrow-left"} onPress={goBack}/>  
            <Text>
                Back to login
            </Text>
        </TouchableOpacity>
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
        width: '100%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default AccountRecoveryPage;