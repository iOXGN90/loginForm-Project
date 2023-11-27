import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';


const BottomNavigation = () => {
    const Navigation = useNavigation();

    const goToLogin = () => {
        Navigation.navigate('Login_Prototype');
    };

  return (
    <View style={styles.Body} onPress={goToLogin}>
        {/* <TouchableOpacity style={styles.containerLeft}>
            <View style={styles.imageContainer}>
                <Image style={styles.userIcon} source={require('../../assets/navigation/logout.png')} />
            </View>
            <Text style={styles.logoutText}>
                Logout
            </Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.containerRight} onPress={goToLogin}>
            <View style={styles.imageContainer}>
                <Image style={styles.userIcon} source={require('../../assets/navigation/logout.png')} />
            </View>
            <Text style={styles.logoutText}>
                Logout
            </Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    Body:{
        // backgroundColor:'#E8EAED',        
        width: '100%',
        height: '11%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 100,
    },
    // containerLeft:{
    //     borderRadius: 20,
    //     backgroundColor:'#E8EAED',        
    //     width: '50%',
    //     height: 50,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderLeftWidth: 1,
    //     marginTop: 85,
    // },

    containerRight:{
        borderRadius: 100,
        backgroundColor:'#E8EAED',        
        width: '30%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderLeftWidth: 5,
        borderBottomWidth: 5,
        borderLeftColor: '#55bCF6',
        borderBottomColor: '#55bCF6',
        borderRightColor: '#55bCF6',
        marginRight: 25,
        marginBottom: 10,
        marginTop: 85,
        elevation: 5,
    },
    imageContainer:{
        // alignContent: 'center',
        // justifyContent: 'center',
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