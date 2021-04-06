import React from 'react';
import {Text, View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function EntryPage  ({ navigation })
{
    return (
        <View style={styles.window}>
            <View style={styles.header}>
                <Text style={styles.text}>Transport Sharing</Text>
            </View>
            <View style={styles.mainContainer}>  
                <Text style={styles.title}>Вход</Text>
                <TextInput style={styles.input} placeholder = 'Email/телефон'/>
                <TextInput style={styles.input} placeholder = 'Пароль'/>                     
                <TouchableOpacity style={styles.entryButton} onPress={() => navigation.navigate('BicyclePage')}>
                    <Text style={styles.entryButonText}>Войти</Text>                   
                </TouchableOpacity>            
                <TouchableOpacity style={styles.entrySocialButton}>
                    <Image source={require('../src/img/google-icon-logo.png')} style={styles.icon} />
                    <Text style={styles.entrySocialButtonText}>Войти через Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.entrySocialButton}>
                <Image source={require('../src/img/facebook-icon-logo.png')} style={styles.icon} />
                    <Text style={styles.entrySocialButtonText}>Войти через Facebook</Text>
                </TouchableOpacity>
                <Text style={styles.registerTitle}>Ещё нет аккаунта?</Text>
                <TouchableOpacity>
                    <Text style={styles.registerText}>Зарегистрироваться</Text>   
                </TouchableOpacity>
            </View>
        </View>
    )  
}

const styles = StyleSheet.create
({
    window: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    mainContainer: {
        height: '92%',
        backgroundColor: '#C1DB81',
        padding: 20,        
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: 
    {
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',       
    },

    text: 
    {
         color: '#C1DB81',
         fontSize: 20,
         fontWeight: 'bold',
         //fontFamily: 'Alegreya'
    },

    title: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 125,
        //fontFamily: 'Alegreya'
    },

    input: {
        width: '90%',
        backgroundColor: "#FFFFFF",
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20
    },

    entryButton: {
        width: '40%',
        height: '7%',
        alignItems: "center",
        backgroundColor: "#169BD5",
        marginTop: 15,
        marginBottom: 25,
        justifyContent: 'center',
        borderRadius: 7,

    },

    entryButonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    },

    entrySocialButton: {
        width: '70%',
        height: '9%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",
        marginTop: 10,
        marginBottom: 10,
        padding: 10, 
        justifyContent: 'flex-start',
        borderRadius: 7,
    },

    entrySocialButtonText: {
        color: '#000000',
        paddingLeft: 10,
        fontSize: 14        
    },

    icon: {        
        width: 25,
        height: 25,
                       
    },

    registerTitle: {
        color: '#55692C',
        marginTop: 20,

    },

    registerText: {
        color: '#55692C',
        fontSize: 16,
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    }

})

