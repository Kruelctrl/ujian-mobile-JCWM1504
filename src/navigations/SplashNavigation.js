import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import DrawerNav from '../navigations/DrawerNavigation'
import Login from '../screens/login'
import Register from '../screens/register'


const SplashNavigation = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="drawer-nav" component={DrawerNav} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
};

export default SplashNavigation;
