import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EntryPage } from './src/EntryPage/EntryPage.js';
import {Header} from './src/Header.js';


export default function App() 
{
  
  return (
    <View>
      <Header />
      <View style={styles.container}>
          <EntryPage />
      </View>
    </View>   
     
  );
}

const styles = StyleSheet.create
({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }

});
