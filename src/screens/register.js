import React from 'react';
import {
  View, Text, Button
} from 'react-native'

const RegisterScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        Register
      </Text>
      <Button title="go to login" onPress={() => {
        navigation.navigate('login')
      }} />
      <Button title="go to drawer" onPress={() => {
        navigation.navigate('drawer-nav')
      }} />
    </View>
  );
};

export default RegisterScreen;
