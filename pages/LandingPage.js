import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

function LandingPage() {
  return (
    <View style={styles.container}>
        <Text>
            Login
        </Text>
        <Text>
            Signup
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
}
)
export default LandingPage;