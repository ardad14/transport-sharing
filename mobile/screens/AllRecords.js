import React from 'react'
import { View, Pressable, Text, FlatList, StyleSheet, Image, StatusBar, SafeAreaView} from 'react-native';
import trips from "../src/trips.json";
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default class AllRecords extends React.Component {
    
    constructor() {
        super();
        this.state = {
            trip : trips
        }
    }

    

    render() {
        return (
            <View style={styles.window}>
                <View style={styles.header}>
                    <Pressable onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image style={styles.navbarImage}source={require('../src/img/navbar-icon.png')}/>  
                    </Pressable> 
                    <Text style={styles.text}>Transport Sharing</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList style={styles.flatList}
                        data={this.state.trip}
                        key={this.state.trip.key}
                        renderItem={({item}) => (
                            <View style={styles.tripContainer}>
                                    <View style={[styles.elementHeader, styles.row]}>
                                        <Text style={styles.headerBottomText}>{item.date}</Text>
                                        <Image style={styles.vehiclePicture} source={require('../src/img/white-bike-navb.png')}/>
                                    </View>                                
                                <View style={styles.elemntBody}>
                                    <View style={[styles.row, styles.addresContainer]}>
                                        <Icon
                                            name='dot-circle-o'
                                            size={32}
                                            color={'grey'}
                                        />
                                        
                                        <Text style={styles.addresText}>{item.departure}</Text>
                                    </View>
                                    <Entypo 
                                        name='flow-line'
                                        size={55}
                                        color={'grey'}
                                        style={styles.entypo}
                                    />
                                    <View style={[styles.row, styles.addresContainer, styles.secondAddres]}> 
                                        <Icon
                                            name='map-marker'
                                            size={32}
                                            color={'grey'}
                                        />
                                        <Text style={styles.addresText}>{item.destination}</Text>
                                    </View>
                                    <View style={[styles.row, styles.tripInfo]}>
                                        <View style={styles.column}>
                                            <Text style={styles.tripInfoText}>№ велосипеда</Text>
                                            <Text style={[styles.tripInfoText, styles.tripInfoNumbers]}>{item.vehicleId}</Text>
                                        </View>
                                        <View style={styles.column}>
                                            <Text style={styles.tripInfoText}>Тривалість</Text>
                                            <Text style={[styles.tripInfoText, styles.tripInfoTime]}>{item.duration} хвилин</Text>
                                        </View>
                                    </View>   
                                </View>
                                <View style={[styles.elementFooter, styles.row]}>
                                    <Text style={styles.headerBottomText}>Сума:</Text>
                                    <Text style={styles.headerBottomText}>{item.sum} грн</Text>
                                </View>

                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    row: {
        flexDirection: "row"
    },

    column: {
        flexDirection: 'column'
    },

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
        height: '3%',
        alignItems: 'center',
        color: '#fff',
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

    listContainer: {
        height: '89%',
        width: '100%',
        marginTop: 5,
    },

    tripContainer: {
        height: 310,
        width: '93%',
        marginTop: 30,        
        alignSelf: 'center',
        fontFamily: 'Montserrat'
    },

    elementHeader: {
        height: 45,
        backgroundColor: '#C1DB81',
        color: '#000',
        fontSize: 16,
        justifyContent: 'flex-start',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        

    },

    headerBottomText: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 8
    },

    vehiclePicture: {
        height: 32,
        width: 55,
        marginLeft: 15,
        marginTop: 6
    },
    
    elemntBody: {
        height: 220,
    },

    addresContainer: {
        height: 30,
        marginTop: 10,
        marginLeft: 25
    },

    entypo: {
        marginLeft: 10
    },  

    secondAddres: {
        marginTop: -4,
        marginLeft: 30
    },

    addresText: {
        marginTop: 2,
        marginLeft: 20,
        fontSize: 18,
    },

    tripInfo: {
        justifyContent: 'space-around',
        marginTop: 20,

    },

    tripInfoText: {
        fontSize: 18,

    },

    tripInfoNumbers: {
        fontWeight: 'bold',
        marginLeft: 50
    },

    tripInfoTime: {
        fontWeight: 'bold',
        marginLeft: 30
    },

    elementFooter: {
        height: 45,
        backgroundColor: '#C1DB81',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    }
})