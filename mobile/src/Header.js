import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export const Header = (props) => 
{
    return (

        <View style={styles.header}>
            <Text style={styles.text}>Transport Sharing</Text>
        </View>
    )
}

const styles = StyleSheet.create
({
    header: 
    {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',       
    },

    text: 
    {
         color: '#C1DB81',
         fontSize: 20,
         fontWeight: 'bold',
         //fontFamily: 'Alegreya'
    }

})