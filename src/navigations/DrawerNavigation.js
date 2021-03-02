import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home_Nav from '../navigations/HomeNavigation'
import Search_Nav from '../navigations/SearchNavigation'

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home-nav" component={Home_Nav} />
            <Drawer.Screen name="search-nav" component={Search_Nav} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
