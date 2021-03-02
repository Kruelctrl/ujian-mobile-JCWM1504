import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home1 from '../screens/home'

const HomeNavigation = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    );
};

export default HomeNavigation;
