import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Pressable, Image} from 'react-native';

export default class Documents extends React.Component {

    render() {
        return (
            <View style={styles.window}>
                <View style={styles.header}>
                    <Pressable onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image style={styles.navbarImage}source={require('../src/img/navbar-icon.png')}/>  
                    </Pressable> 
                    <Text style={styles.text}>Transport Sharing</Text>
                </View> 
                <View style={styles.firstPage}>
                    <View style={styles.mainContainer}>
                        <Text style={styles.mainText}>
                            Добавьте в ваш профиль
                            водительское удостоверение,
                            чтобы арендовать машину
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.addDocumentButton}>
                        <Text style={styles.buttonText}>Добавить</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    window: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },

    navbarImage:
    {
        width: 45,
        height: 45,
        marginLeft: 20,
    },

    header: 
    {
        flexDirection: 'row',
        height: 25,
        alignItems: 'center',
        marginTop: 35,
        marginLeft: -5,

    },

    text: 
    {
        color: '#C1DB81',
        fontSize: 20,
        fontWeight: 'bold',
        //fontFamily: 'Alegreya'
        marginLeft: 40,
    },
    
    mainContainer: {
        width: "77%",
        marginTop: "60%",
        
    },  

    firstPage: {
        alignItems: 'center'

    },

    mainText: {
        textAlign: 'center',
        fontSize: 19,
        //fontFamily: 'Montserrat'
    },
    
    addDocumentButton: {
        backgroundColor: '#C1DB81',
        marginTop: 15,
        height: 35,
        width: 110,
        borderRadius: 15,
        
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 4
        //fontFamily: 'Montserrat'
    },


})