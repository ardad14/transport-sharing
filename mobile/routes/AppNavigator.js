import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryPage from '../screens/EntryPage.js';
import BicyclePage from '../screens/BicyclePage.js';

const Stack = createStackNavigator();

export default function AppNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="EntryPage" headerMode='none'>
                <Stack.Screen name="EntryPage" component={EntryPage} />
                <Stack.Screen name="BicyclePage" component={BicyclePage} />
            </Stack.Navigator>
        </NavigationContainer>

    );

    

};
  