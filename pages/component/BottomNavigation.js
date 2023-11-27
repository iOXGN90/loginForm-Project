import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';


const BottomNavigation = () => {
    const Navigation = useNavigation();

    const goToLogin = () => {
        Navigation.navigate('Login');
    };

  return (
    <SafeAreaView style={styles.Body} onPress={goToLogin}>
        <View style={styles.containerLeft}>
            <View style={styles.imageContainer}>
                <Image style={styles.userIcon} source={require('../../assets/navigation/logout.png')} />
            </View>
            <Text style={styles.logoutText}>
                Logout
            </Text>
        </View>
        <View style={styles.containerRight}>
            <View style={styles.imageContainer}>
                <Image style={styles.userIcon} source={require('../../assets/navigation/logout.png')} />
            </View>
            <Text style={styles.logoutText}>
                Logout
            </Text>
        </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    Body:{
        backgroundColor:'#E8EAED',        
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLeft:{
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,

    },
    containerRight:{
        width: '50%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: 'black',
        borderLeftWidth: 1,
    },
    imageContainer:{
        alignContent: 'center',
        justifyContent: 'center',

    },
    userIcon:{
        width: 50,
        height: 50,
    },
    logoutText:{
        textAlign: 'center',
    },
})

export default BottomNavigation;