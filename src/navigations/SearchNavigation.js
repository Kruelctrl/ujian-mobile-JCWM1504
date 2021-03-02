import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Search1 from '../screens/search1'

const SearchNavigation = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="search-1" component={Search1} />
        </Stack.Navigator>
    );
};

export default SearchNavigation;
