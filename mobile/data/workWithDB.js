import React from 'react';
import openDatabase from 'react-native-sqlite-storage';

var userInfoDB = openDatabase({ name: 'UserInfoDatabase.db' });

class workWithDB extends React.Component {

    constructor() {
        super()
        
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
                    'CREATE TABLE IF NOT EXISTS userInfo(user_id INTEGER PRIMARY KEY AUTOINCREMENT, login VARCHAR(25), password VARCHAR(25), firstname VARCHAR(20), lastname VARCHAR(20), phoneNummber INT(12), birthday DATE, city VARCHAR(25))',
                    []
                );
                }
            }
            );
        });
    }

    onRegisterAction(login, password, firstname, lastname, phoneNummber, birthday, city) {
        userInfoBDdb.transaction(function (txn) {
            tx.executeSql(
                'INSERT INTO userInfo (login, password, firstname, lastname, phoneNummber, birthday, city) VALUES (?,?,?,?,?,?,?)',
                [login, password, firstname, lastname, phoneNummber, birthday, city]
            )
        })
    }

    onEnterAction(login, password) {
        userInfoBDdb.transaction(function (txn) {
            tx.executeSql(
                'SELECT login, password FROM userInfo WHERE login=?, password=? VALUES (?,?)',
                [login, password]
            )
        })
    
    }
}

