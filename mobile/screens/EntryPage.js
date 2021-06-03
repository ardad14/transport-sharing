import React from 'react';
import {Text, View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import { color } from 'react-native-reanimated';
import users from "../data/users.json"

const initialState= {
    login: '',
    password: ''
}
const reducer = (state=initialState) => {
    return state
}

const store = createStore(reducer)

export default class EntryPage extends React.Component 
{
    constructor() {
        super()
        this.state = {
            login: "",
            password: "",
            userData: []
        }
        this.getData();

    }

    setLogin(value) {
        this.setState({login: value})
    }

    setPassword(value) {
        this.setState({password: value})
    }

    onSubmit = async () => {
        try {
            await AsyncStorage.setItem("token", "abc123")
        } catch(err) {
            console.log(err);
        }
       
    }

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          if(value !== null) {
            this.setState({token: value})
          }
        } catch(e) {
          // error reading value
        }
      }

    enter() {
        this.state.userData = users.filter(element => element.email == this.state.login);
        if(this.state.userData.ф)
        this.props.navigation.navigate('chooseVehicle')
    }


    render() {
        return (
            <View style={styles.window}>
                <View style={styles.header}>
                    <Text style={styles.text}>Transport Sharing</Text>
                </View>
                <View style={styles.mainContainer}>
                    {/*<Text style={styles.title}>{this.state.token}</Text>*/}  
                    <Text style={styles.title}>Вхід</Text>
                    <Provider store={store}>
                        <TextInput 
                            style={styles.input} 
                            placeholder = 'Email/телефон'
                            value={this.state.login}
                            onChangeText={(val) => this.setLogin(val)}
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder = 'Пароль'
                            autoCompleteType="password"
                            value={this.state.password}
                            onChangeText={(val) => this.setPassword(val)}    
                        />                     
                        <TouchableOpacity style={styles.entryButton} onPress={() => this.props.navigation.navigate('chooseVehicle')}>
                            <Text style={styles.entryButonText}>Увійти</Text>                   
                        </TouchableOpacity>            
                        <TouchableOpacity style={styles.entrySocialButton}>
                            <Image source={require('../src/img/google-icon-logo.png')} style={styles.icon} />
                            <Text style={styles.entrySocialButtonText}>Увійти через Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.entrySocialButton}>
                        <Image source={require('../src/img/facebook-icon-logo.png')} style={styles.icon} />
                            <Text style={styles.entrySocialButtonText}>Увійти через Facebook</Text>
                        </TouchableOpacity>
                        <Text style={styles.registerTitle}>Ще не має акаунту?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterPage')}>
                            <Text style={styles.registerText}>Зареєструватися</Text>   
                        </TouchableOpacity>
                    </Provider>
                </View>
            </View>
        );
    } 
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

