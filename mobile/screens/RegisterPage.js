import React from 'react';
import {Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import * as Font from 'expo-font';
import users from '../data/users.json'
import DateTimePicker from '@react-native-community/datetimepicker';

export default class RegisterPage extends React.Component {

    constructor(props) {
        super(props)        
        this.state = {
            date: new Date(1598051730000),
            show: false,
            name: '',
            lastname: '',
            email: '',
            phone: '',
            birthday: '',
            password: '' 
        };
        this.setDate = this.setDate.bind(this);
        this.setShow = this.setShow.bind(this);       
    }

    setDate(newDate) {
        this.setState({ date: newDate });
    }

    setShow() {
        this.setState({ show: true });
    }

    onChange = (event, selectedDate) => {
    const currentDate = selectedDate;    
    setDate(currentDate);
    };

    setName(value) {
        this.setState({name: value})
    }

    setLastname(value) {
        this.setState({lastname: value})
    }

    setEmail(value) {
        this.setState({email: value})
    }
    
    setPhone(value) {
        this.setState({phone: value})
    }

    setBirthday(value) {
        this.setState({birthday: value})
    }

    setPassword(value) {
        this.setState({password: value})
    }

    register() {
        Alert.alert("register")
        if(this.state.name == '') {
            this.state.name = "Неправильне ім'я"
            return 
        }
        users.push([this.state.name, this.state.lastname, this.state.email])
    }


    render() {
        return (
            <View style={styles.window}>
                <View style={styles.header}>
                    <Text style={styles.text}>Transport Sharing</Text>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.mainContent}>  
                        <Text style={styles.title}>Реєстрація</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder = "Ім'я"
                            autoCompleteType='name'
                            value={this.state.name}
                            onChangeText={(name) => this.setState({name})}
                        />  
                        <TextInput 
                            style={styles.input} 
                            placeholder = 'Прізвище'
                            autoCompleteType='name'
                            value={this.state.lastname}
                            onChangeText={(lastname) => this.setState({lastname})}
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder = 'Электронна адреса'
                            autoCompleteType='email'
                            value={this.state.email}
                            onChangeText={(email) => this.setState({email})}                        
                        /> 
                        <TextInput 
                            style={styles.input} 
                            placeholder = 'Телефон'
                            autoCompleteType='tel'
                            value={this.state.phone}
                            onChangeText={(phone) => this.setState({phone})}
                        />
                        <TouchableOpacity>
                            <TextInput 
                            style={styles.input} 
                            placeholder = 'Дата народження'
                            value={this.state.birthday}
                            onChangeText={(birthday) => this.setState({birthday})}                            
                            />
                        </TouchableOpacity>             
                        <TextInput 
                            style={styles.input} 
                            placeholder = 'Пароль'
                            autoCompleteType='password'
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder = 'Повторіть пароль'
                            autoCompleteType='password'
                            secureTextEntry={true}
                            value={this.state.password}
                        />
                        <TextInput style={styles.input} placeholder = 'Оберіть місто'/>      
                        {/*<DateTimePicker
                            testID="dateTimePicker"
                            disabled={true}
                            value={this.state.date}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            //onChange={onChange}
                        />*/}
                        
                        <TouchableOpacity style={styles.entryButton} onPress={() => this.register()}>
                            <Text style={styles.entryButonText}>Зареєструватися</Text>                   
                        </TouchableOpacity>            
                        <Text style={styles.registerTitle}>Вже є акаунт?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("EntryPage")}>
                            <Text style={styles.registerText}>Увійти</Text>   
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )  
    }
}

const styles = StyleSheet.create
({
    window: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    mainContainer: {
        backgroundColor: "#fff",
        height: '92%',
        backgroundColor: '#C1DB81',
        padding: 20,        
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainContent: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
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
        width: '65%',
        height: '7%',
        alignItems: "center",
        backgroundColor: "#169BD5",
        marginTop: 15,
        marginBottom: 10,
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
        marginTop: 10,

    },

    registerText: {
        color: '#55692C',
        fontSize: 16,
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    }

})

