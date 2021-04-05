import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';



export const BicyclePage = (props) => {

    return (
        <View style={styles.window}>
            <View style={styles.header}>
                <Text style={styles.text}>Transport Sharing</Text>
            </View>
            <View style={styles.mapContainer}>
                <MapView style={styles.map}
                    initialRegion={{
                    latitude: 50.00446267391827, 
                    longitude: 36.23569330615205,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004,
                    }}
                >
                    <Marker 
                        coordinate={{
                            latitude: 50.00575686837537,
                            longitude: 36.235145387930835,
                        }}
                        title="First bike"
                    />
                    
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
    }
})