import React from 'react'
import { View, Button, Text, StyleSheet, Pressable, Image} from 'react-native';

export default class Profile extends React.Component {

    render() {
        return (
            <View style={styles.window}>
                <View style={styles.header}>
                    <Pressable onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image style={styles.navbarImage}source={require('../src/img/navbar-icon.png')}/>  
                    </Pressable> 
                    <Text style={styles.text}>Transport Sharing</Text>
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
    
})