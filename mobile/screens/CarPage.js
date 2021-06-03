import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import locations from '../src/carMarkers.json';
import {DrawerActions} from '@react-navigation/native';

import CarModal from '../modals/carModal.js'


export default class CarPage extends React.Component 
{
    constructor() {
        super()
        this.state = {
            markers: locations,
            modalVisible: false        
        }
    } 

    render() {

        let popupRef = React.createRef()

        const onShowPopup = (title, addres) => {           
            popupRef.show(title, addres)
        }
 
        const onClosePopup = () => {
            popupRef.close()
        }

        return (
            <View style={styles.window}>
                <View style={styles.header}>
                    <Pressable onPress = {() => this.props.navigation.toggleDrawer()}>
                        <Image style={styles.navbarImage}source={require('../src/img/navbar-icon.png')}/>  
                    </Pressable> 
                    <Text style={styles.text}>Transport Sharing</Text>
                </View>
                <View style={styles.mapContainer}>
                    <MapView style={styles.map}
                        showsUserLocation
                        initialRegion={{
                        latitude: 50.00446267391827, 
                        longitude: 36.23569330615205,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                        }}
                    >
                        {
                            this.state.markers.map(marker =>(
                                <Marker
                                key={marker.key} 
                                coordinate={{
                                    latitude: marker.latitude,
                                    longitude: marker.longitude,
                                }}
                                onPress={() => onShowPopup(marker.id)}
                                icon={require('../src/img/car_icon.png')}
                                >                                    
                                </Marker>


                            ))
                        }               
                        
                    </MapView>             
                    
                </View>
                <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.toBicyclePage} onPress={() => this.props.navigation.navigate('BicyclePage')}>
                            <Image style={styles.BicycleImage} source={require('../src/img/green-bike-navb.png')}/>
                            <Text style={styles.BicycleText}>Карта велосипедів</Text>                   
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.toScooterPage} onPress={() => this.props.navigation.navigate('ScooterPage')}>
                            <Image style={styles.ScooterImage} source={require('../src/img/green-scooter-navb.png')}/>
                            <Text style={styles.buttonScooterText}>Карта самокатів</Text>                   
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.toCarPage} >
                            <Image style={styles.CarImage} source={require('../src/img/white-car-navb.png')}/>
                            <Text style={styles.buttonCarText}>Карта автомобілей</Text>                   
                        </TouchableOpacity>
                </View>
                <View>
                <CarModal                    
                    ref={(target) => popupRef = target}
                    onTouchOutside={onClosePopup}
                    navigation={this.props.navigation}                
                />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create ({

    window: {
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
        //justifyContent: 'space-around',
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

    mapContainer: 
    {        
        height: '78%',
        width: '98%',
        borderRadius: 25,
        overflow: 'hidden',        
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    map: 
    {
        ...StyleSheet.absoluteFillObject,
       
    },

    infoField: 
    {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150
    },

    bikeName: 
    {
        fontSize: 16,
        marginBottom: 5
    },

    buttonContainer: 
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '11%',
        alignItems: "center",
        backgroundColor: "#ffffff",
        marginTop: 15,
        justifyContent: 'center',        
        borderRadius: 7,
    },

    toBicyclePage: 
    {
        
        width: '30%',
        height: '100%',
        alignItems: "center",
        backgroundColor: "#ffffff",
        marginRight: 20,
        justifyContent: 'center',
        borderRadius: 7,
        textAlign: 'center',

    },
    
    toScooterPage: 
    {
        width: '30%',
        height: '100%',
        alignItems: "center",
        backgroundColor: "#fff",        
        justifyContent: 'center',
        borderRadius: 7,
    },   

    toCarPage: 
    {
        width: '30%',
        height: '100%',
        alignItems: "center",
        backgroundColor: "#C1DB81",        
        justifyContent: 'center',
        borderRadius: 7,
        marginLeft: 20,
    },

    BicycleText: 
    {
        marginTop: 5,
        textAlign: 'center',
    },

    buttonScooterText: 
    {
        width: 80,
        textAlign: 'center',
    },

    buttonCarText: 
    {
        marginBottom: 5,
        textAlign: 'center',
    },

    BicycleImage: 
    {
        width: 60,
        height: 35,
    },

    ScooterImage:
    {
        width: 45,
        height: 40,
        
    },

    CarImage:
    {       
        width: 50,
        height: 30,
    },

    
})