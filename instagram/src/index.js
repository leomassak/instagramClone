import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import '~/config/ReactotronConfig';

import AppNavigator from '~/routes/AppNavigator';

const App = () =>(
    <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <AppNavigator />
    </NavigationContainer>
);

export default App;
