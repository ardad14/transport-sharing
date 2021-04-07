import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import locations from '../src/bicycleMarkers.json';

export default function BicyclePage  (props) 
{
    state = {
        markers: locations        
    }

    return (
        <View style={styles.window}>
            <View style={styles.header}>
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
        </View>
    )

}

const styles = StyleSheet.create
({
    window: {
        paddingHorizontal: 10,
        paddingVertical: 10
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

    mapContainer: 
    {
        
        height: '88%',        
        padding: 20,        
        marginTop: 20,
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
        alignSelf: 'flex-start',
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
    }
})