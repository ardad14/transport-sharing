import React from 'react';
import 'react-native-gesture-handler';
import { View, Button, Text, Alert } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  
} from '@react-navigation/drawer';
//import workWithDB from "./data/workWithDB.js";
import AppNavigator from './routes/AppNavigator.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import openDatabase from 'react-native-sqlite-storage';

/*var userInfoDB = openDatabase({ name: 'userInfo.db',
    location: "/data/userInfo.db"
});*/

export default class App extends React.Component {
  
  /*constructor() {
    super()
    this.getData();
    if(userInfoDB != null) {
        Alert("Database is opened!!");
    }
    
    state = {
      username: "",
      password: "",
      token: ""
    }
  }

  ifExistDB () {

    userInfoBDdb.transaction(function (txn) {
        txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='userInfo'",
        [],
        function (tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS userInfo', []);
            txn.executeSql(
                'CREATE TABLE IF NOT EXISTS userInfo(user_id INTEGER PRIMARY KEY AUTOINCREMENT, login VARCHAR(25), password VARCHAR(25), authorise BOOL, firstname VARCHAR(20), lastname VARCHAR(20), phoneNummber INT(12), birthday DATE, city VARCHAR(25))',
                []
            );
            }
        }
        );
    });
  }*/

    render() {
      return (
        <AppNavigator />
      );
  }
}