import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryPage from '../screens/EntryPage.js';
import BicyclePage from '../screens/BicyclePage.js';
import RegisterPage from '../screens/RegisterPage.js';



const Stack = createStackNavigator();

export default function AppNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="EntryPage" headerMode='none'>
                <Stack.Screen name="EntryPage" component={EntryPage} />
                <Stack.Screen name="RegisterPage" component={RegisterPage} />                
                <Stack.Screen name="BicyclePage" component={BicyclePage} />
            </Stack.Navigator>
        </NavigationContainer>

    );

    

};
  