import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


export const Header_with_bar = () => 
{
    return (

        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={require('./img/navbar-icon.png')} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.text}>Transport Sharing</Text>
        </View>
    )
}

const styles = StyleSheet.create
({
    header: 
    {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
           
        paddingTop: 10,
         
    },

    text: 
    {
         color: '#C1DB81',
         fontSize: 20,
         fontWeight: 'bold',
         justifyContent: 'flex-end',
         //fontFamily: 'Alegreya'
    },

    icon: {        
        width: 45,
        height: 45,
        marginLeft: 15
                       
    },

})