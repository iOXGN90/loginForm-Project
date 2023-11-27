// Navigation.js
import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Navigation = () => {
  const navigation = useNavigation();

  const handleNotificationPress = () => {
    // Add logic to navigate to the notification screen or handle notifications
    console.log('Notification icon pressed!');
  };
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
      <IconButton icon="bell" onPress={handleNotificationPress} />
    </View>
  );
};

export default Navigation;