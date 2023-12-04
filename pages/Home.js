import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { Text, ScrollView, StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { IconButton } from 'react-native-paper';
import Notification from './component/NavigationBar';
import HomeContent from './HomeContent';
import BottomNavigation from './component/BottomNavigation'


const Home = () => {
  const navigation = useNavigation();
  const logOut = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.navigationBar}>
        <View style={styles.leftNavigation}>
          <TouchableOpacity style={styles.userContainer}>
            <Image style={styles.userIcon} source={require('../assets/navigation/account-circle.png')} />
          </TouchableOpacity>
          <TextInput
            placeholder='Search...'
            style={styles.searchInput}
          />
        </View>
        <View style={styles.rightNavigation}>
          <Notification/>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.Body}>
        <HomeContent style={styles.content}/>
      </ScrollView>
      <View style={styles.bottomNavigation}>
        <BottomNavigation/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Body:{
    width: '90%',
    height: 'auto',
    borderRadius: 20,
  },
  navigationBar:{
    width: '100%',
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor:'#E8EAED',
    borderRadius: 20,
    padding:5,
  },
  leftNavigation:{
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',

  },
  userContainer:{
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  searchInput:{
    justifyContent: 'center',
    marginLeft: 7,
    marginRight: 5,
    width: '85%',
    height: 50,
    fontSize:20,
    backgroundColor:'#FFFFFF',
    paddingLeft:30,
    paddingRight:30,
    textShadowRadius:10,
    elevation: 5,
    borderRadius: 100,
  },
  userIcon:{
    width: 35,
    height: 35,
    borderColor: '#55bCF6'
  },
  rightNavigation:{
    elevation: 5,
    borderRadius: 100,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
// backgroundColor:'#E8EAED'// Gray
// backgroundColor: '#55bCF6' // Blue

export default Home;