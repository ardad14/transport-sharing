import React from 'react'
import {View, Text, TextInput, Pressable, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RentAlert extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            setTimeVisible: false,
            timerVisible: false
        }    
    }

    setTime = (value) => {
      this.setState({time: value * 60})
    }
    
    setBook = () => {
        this.setState({setTimeVisible: true})
    }
    
    
    render() {
        return(
          <View style={styles.window}>
                <View style={styles.header}>
                    <Pressable onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image style={styles.navbarImage} source={require('../src/img/navbar-icon.png')}/>  
                    </Pressable> 
                    <Text style={styles.text}>Transport Sharing</Text>
                </View>
                <View style={{width: '100%', marginTop: 60}}>
                    <Text style={styles.title}>Варіанти аренди</Text>
                    <View style={styles.row}>
                      <TouchableOpacity style={styles.book} onPress={this.setBook()}>
                        <Text style={{paddingTop: 9}}>Забронировать</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.book, styles.bookNow]} >
                        <Text style={{paddingTop: 9, color: "#fff"}}>Арендовать сейчас</Text>
                      </TouchableOpacity>                      
                    </View>
                </View>
                  
                {this.state.setTimeVisible ? 
                    <View style={{alignItems: 'center', marginTop: 35 }}>
                        <Text style={{fontSize: 18, textAlign: 'center'}}>Скільки часу вам потрібно, щоб знайти станцію?</Text>
                        <TextInput
                            style={styles.input} 
                            placeholder = 'Час'                    
                            value={this.state.time}
                            onChangeText={(value) => this.setTime(value)} 
                        />
                        <TouchableOpacity style={[styles.book, styles.applyTimer]}>
                            <Text style={{paddingTop: 9, color: "#000"}}>Підтвердити</Text>
                        </TouchableOpacity> 
                    </View> 
                : null} 
                
                              
                
                </View>               
        )
    } 
  }

const styles = StyleSheet.create
({
    row: {
        flexDirection: "row"
    },

    column: {
        flexDirection: "column"
    },

    window: {
        height: "100%",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },

    navbarImage:
    {
        width: 45,
        height: 45,
        marginLeft: 10,
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
        marginLeft: 60,
    },

    title: {
        fontSize: 22,
        textAlign: 'center'        
    },

    book: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        width: 150,
        height: 40,
        backgroundColor: "#FFF",
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 10          
    },

    bookNow: {
        marginLeft: 50,
        backgroundColor: "#169BD5",
        borderWidth: 0        
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
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#000"
    },

    applyTimer: {
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      width: 150,
      height: 40,
      backgroundColor: "#FFF",
      alignItems: 'center',
      marginTop: 25,
      marginLeft: 10  
    }

  })