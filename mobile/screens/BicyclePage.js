import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Pressable, Modal} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import locations from '../src/bicycleMarkers.json';
import VehicleNavigator from '../routes/VehicleNavigator.js';


{/*function modalMenu (...props)
{
    return (
    <Modal>
                <View style={styles.modalMenu}>
                    {
                    state.markers.map(marker => (
                        <Text
                        key={marker.key}
                        style={styles.stationNumber}>{marker.title}</Text> 

                    ))

                    }
                               
                </View>
            </Modal>
    );
}*/}

export default function BicyclePage  ({navigation}) 
{
    state = {
        markers: locations,
        modalVisible: false        
    }

    /*this.setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }*/

    return (
        <View style={styles.window}>
            <View style={styles.header}>
                <Pressable onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}>
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
                        state.markers.map(marker =>(
                            <Marker
                            key={marker.key} 
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            icon={require('../src/img/bike_icon.png')}
                            >
                                <Callout tooltip>
                                    <View>
                                        <View style={styles.infoField}>
                                            <Text style={styles.bikeName}>{marker.title}</Text>
                                            <Text >{marker.descript}</Text>
                                        </View>
                                    </View>
                                </Callout>
                            </Marker>


                        ))
                    }               
                    
                </MapView>             
                
            </View>
            
            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.toBicyclePage} >
                        <Image style={styles.buttonImage} source={require('../src/img/white-bike-navb.png')}/>
                        <Text style={styles.buttonText}>Карта велосипедов</Text>                   
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toScooterPage} onPress={() => navigation.navigate('ScooterPage')}>
                        <Image style={styles.ScooterImage} source={require('../src/img/green-scooter-navb.png')}/>
                        <Text style={styles.buttonScooterText}>Карта самокатов</Text>                   
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toCarPage} onPress={() => navigation.navigate('CarPage')}>
                        <Image style={styles.CarImage} source={require('../src/img/green-car-navb.png')}/>
                        <Text style={styles.buttonCarText}>Карта автомобилей</Text>                   
                    </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create
({
    window: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },

    navbarImage:
    {
        width: 45,
        height: 45,
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
         marginLeft: 65,
    },

    mapContainer: 
    {
        
        height: '78%',        
        padding: 20,        
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
        backgroundColor: "#C1DB81",
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
        backgroundColor: "#fff",        
        justifyContent: 'center',
        borderRadius: 7,
        marginLeft: 20,
    },

    buttonText: 
    {
        marginTop: 5,
        textAlign: 'center',
    },

    buttonScooterText: 
    {
        textAlign: 'center',
    },

    buttonCarText: 
    {
        marginBottom: 5,
        textAlign: 'center',
    },

    buttonImage: 
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
        height: 45,
    },

    modalMenu: 
    {
        height: '50%',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#C1DB81",

    },

    stationNumber:
    {

    },

    
})