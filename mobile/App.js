import React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  
} from '@react-navigation/drawer';

import AppNavigator from './routes/AppNavigator.js';


export default class App extends React.Component {
  
  render() {
    return (
      <AppNavigator />
    );
  }
}
