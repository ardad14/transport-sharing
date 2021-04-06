import React from 'react';
import {Text, View, Picker, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function RegisterPage  ({ navigation })
{
    return (
        <View style={styles.window}>
            <View style={styles.header}>
                <Text style={styles.text}>Transport Sharing</Text>
            </View>
            <View style={styles.mainContainer}>  
                <Text style={styles.title}>Регистрация</Text>
                <TextInput style={styles.input} placeholder = 'Имя'/>
                <TextInput style={styles.input} placeholder = 'Фамилия'/>
                <TextInput style={styles.input} placeholder = 'Электронный адрес'/> 
                <TextInput style={styles.input} placeholder = 'Телефон'/> 
                <Text style={styles.greytext}>Дата рождения:</Text>      
                <Picker>
                    <Picker.Item label="1" value="1"></Picker.Item>   
                    <Picker.Item label="2" value="1"></Picker.Item> 
                    <Picker.Item label="3" value="1"></Picker.Item> 
                    <Picker.Item label="4" value="1"></Picker.Item> 
                    <Picker.Item label="5" value="1"></Picker.Item> 
                    <Picker.Item label="6" value="1"></Picker.Item> 
                    <Picker.Item label="7" value="1"></Picker.Item> 
                    <Picker.Item label="8" value="1"></Picker.Item> 
                    <Picker.Item label="9" value="1"></Picker.Item> 
                    <Picker.Item label="10" value="1"></Picker.Item> 
                    <Picker.Item label="11" value="1"></Picker.Item> 
                    <Picker.Item label="12" value="1"></Picker.Item> 
                    <Picker.Item label="13" value="1"></Picker.Item> 
                    <Picker.Item label="14" value="1"></Picker.Item> 
                    <Picker.Item label="15" value="1"></Picker.Item> 
                    <Picker.Item label="16" value="1"></Picker.Item> 
                    <Picker.Item label="17" value="1"></Picker.Item> 
                    <Picker.Item label="18" value="1"></Picker.Item> 
                    <Picker.Item label="19" value="1"></Picker.Item> 
                    <Picker.Item label="20" value="1"></Picker.Item> 
                    <Picker.Item label="21" value="1"></Picker.Item> 
                    <Picker.Item label="22" value="1"></Picker.Item> 
                    <Picker.Item label="23" value="1"></Picker.Item> 
                    <Picker.Item label="24" value="1"></Picker.Item> 
                    <Picker.Item label="25" value="1"></Picker.Item> 
                    <Picker.Item label="26" value="1"></Picker.Item> 
                    <Picker.Item label="27" value="1"></Picker.Item> 
                    <Picker.Item label="28" value="1"></Picker.Item> 
                    <Picker.Item label="29" value="1"></Picker.Item> 
                    <Picker.Item label="30" value="1"></Picker.Item> 
                    <Picker.Item label="31" value="1"></Picker.Item> 
                </Picker>  
                <Picker>
                    <Picker.Item label="январь" value=""></Picker.Item>    
                    <Picker.Item label="февраль" value=""></Picker.Item>  
                    <Picker.Item label="март" value=""></Picker.Item>  
                    <Picker.Item label="апрель" value=""></Picker.Item>  
                    <Picker.Item label="май" value=""></Picker.Item>  
                    <Picker.Item label="июнь" value=""></Picker.Item>  
                    <Picker.Item label="июль" value=""></Picker.Item>  
                    <Picker.Item label="август" value=""></Picker.Item>  
                    <Picker.Item label="сентябрь" value=""></Picker.Item>  
                    <Picker.Item label="октябрь" value=""></Picker.Item>  
                    <Picker.Item label="ноябрь" value=""></Picker.Item>  
                    <Picker.Item label="декабрь" value=""></Picker.Item>  
                </Picker>  
                <Picker>
                    <Picker.Item label="1900" value=""></Picker.Item>  
                    <Picker.Item label="1901" value=""></Picker.Item> 
                    <Picker.Item label="1902" value=""></Picker.Item> 
                    <Picker.Item label="1903" value=""></Picker.Item> 
                    <Picker.Item label="1904" value=""></Picker.Item> 
                    <Picker.Item label="1905" value=""></Picker.Item> 
                    <Picker.Item label="1906" value=""></Picker.Item> 
                    <Picker.Item label="1907" value=""></Picker.Item> 
                    <Picker.Item label="1908" value=""></Picker.Item> 
                    <Picker.Item label="1910" value=""></Picker.Item> 
                    <Picker.Item label="1911" value=""></Picker.Item> 
                    <Picker.Item label="1912" value=""></Picker.Item> 
                    <Picker.Item label="1913" value=""></Picker.Item> 
                    <Picker.Item label="1914" value=""></Picker.Item> 
                    <Picker.Item label="1915" value=""></Picker.Item> 
                    <Picker.Item label="1916" value=""></Picker.Item> 
                    <Picker.Item label="1917" value=""></Picker.Item> 
                    <Picker.Item label="1918" value=""></Picker.Item> 
                    <Picker.Item label="1919" value=""></Picker.Item> 
                    <Picker.Item label="1920" value=""></Picker.Item> 
                    <Picker.Item label="1900" value=""></Picker.Item> 
                    <Picker.Item label="1900" value=""></Picker.Item> 
                    <Picker.Item label="1900" value=""></Picker.Item> 
                    <Picker.Item label="1900" value=""></Picker.Item> 
                    <Picker.Item label="1900" value=""></Picker.Item>   
                </Picker>          
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
    greytext: 
    {
        color: '#333333',
        fontSize: 16,
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

