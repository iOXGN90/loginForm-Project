import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
const HomeContent = () => {
  return (
        <View>
        <View style={styles.content}>
          <View style={styles.leftContent}>
            <Text style={styles.mainText}>
                This is sample mainText
            </Text>
            <Text style={styles.subText}>
                This is sample subText
            </Text>
          </View>
          <View style={styles.rightContent}>
            <Text>
              IMAGE HERE
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.leftContent}>
          <Text style={styles.mainText}>
            This is sample mainText
          </Text>
          <Text style={styles.subText}>
            This is sample subText
          </Text>
          </View>
          <View style={styles.rightContent}>
            <Text>
              IMAGE HERE
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.leftContent}>
          <Text style={styles.mainText}>
            This is sample mainText
          </Text>
          <Text style={styles.subText}>
            This is sample subText
          </Text>
          </View>
          <View style={styles.rightContent}>
            <Text>
              IMAGE HERE
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.leftContent}>
          <Text style={styles.mainText}>
            This is sample mainText
          </Text>
          <Text style={styles.subText}>
            This is sample subText
          </Text>
          </View>
          <View style={styles.rightContent}>
            <Text>
              IMAGE HERE
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.leftContent}>
          <Text style={styles.mainText}>
            This is sample mainText
          </Text>
          <Text style={styles.subText}>
            This is sample subText
          </Text>
          </View>
          <View style={styles.rightContent}>
            <Text>
              IMAGE HERE
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.leftContent}>
          <Text style={styles.mainText}>
            This is sample mainText
          </Text>
          <Text style={styles.subText}>
            This is sample subText
          </Text>
          </View>
          <View style={styles.rightContent}>
            <Text>
              IMAGE HERE
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.leftContent}>
          <Text style={styles.mainText}>
            This is sample mainText
          </Text>
          <Text style={styles.subText}>
            This is sample subText
          </Text>
          </View>
          <View style={styles.rightContent}>
            <Text>
              IMAGE HERE
            </Text>
          </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    content:{
        width: 'relatve',
        height: 100,
        borderRadius: 20,
        marginTop: 30,
        paddingHorizontal:20,
        paddingVertical:30,
        backgroundColor: '#55bCF6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      leftContent:{
        width: '75%',
      },
      mainText:{
        color: 'white',
        fontSize: 25,
      },
      subText:{
        color: 'white',
      },
      rightContent:{
        width: '25%'
      },
})


export default HomeContent;