import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {EntryPage}  from './src/EntryPage.js';
import  {BicyclePage}  from './src/BicyclePage.js';



import {NativeRouter, Switch, Route} from 'react-router-native';


export default function App() 
{
  
  return (
              
      <View style={styles.container}>
        <EntryPage />
      </View>     
     
    
  );
}

const styles = StyleSheet.create
({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10
  }

});