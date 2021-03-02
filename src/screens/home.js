import React from 'react';
import {
  View, Text, Button
} from 'react-native'

const HomeOne = ({ navigation }) => {
  return (
    <View>
      <Text>
        HOME
      </Text>
      <Button title="go to search" onPress={() => {
        navigation.navigate('search-nav', { screen: "search-1" })
      }} />
    </View>
  );
};

export default HomeOne;
