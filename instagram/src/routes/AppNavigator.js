import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import InstagramLogo from '~/assets/images/instagram.png'

import FeedScreen from '~/screens/Feed/FeedScreen';

const Stack = createStackNavigator();

export default function AppContainer() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitle: () => <Image source={InstagramLogo} />,
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#F5F5F5',
            },
        }}>
            <Stack.Screen name="Feed" component={FeedScreen} />
        </Stack.Navigator>
    )
}