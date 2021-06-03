import React from 'react'
import {
    Modal,
    Text, 
    StyleSheet, 
    View, 
    Alert,
    TouchableWithoutFeedback,
    FlatList, 
    Image, 
    TouchableOpacity}
from 'react-native'
import bicycles from '../src/bicyclesInfo.json';
import RentAlert from '../screens/RentAlert.js';
import { set } from 'react-native-reanimated';

const itemHeight = 100
bicyclesAmount = 4
function setValue(key, value) {
    key = value
}

export default class BicycleModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            data: [],
            stNumber: '',
            stAddres: ''            
        }
    }   

    show = (number, addres) => {    
        this.state.stNumber = number
        this.state.stAddres = addres        
        this.state.data = bicycles.filter(element => element.station == number);
        setValue(bicyclesAmount, this.state.data.length)
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex: 1, with: '100%'}} />
        if (!onTouch) return view

        return(
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: "100%"}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderTitle = () => {
        const addres = this.state.stAddres
        const stationNumber = this.state.stNumber
        return (
            <View>
                <Text style={styles.modalHeaderText}>
                    Станція №{stationNumber}                    
                </Text>
                <Text style={styles.modalHeaderText}>
                    {addres}                    
                </Text>
            </View>
        )
    }

    renderContent = () => {
               
        return (
            <View style={{flex: 1, alignItems: 'flex-start'}}>
                {/*<Text>{this.data.length}</Text>*/}
                <FlatList
                    style={{marginBottom: 20, width: "100%"}}
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    key={this.state.data.id}           
                    renderItem={this.renderItem}                    
                    contentContainerStyle={{
                        paddingBottom: 40
                    }}
                    
                />                
            </View>
        )
    }

    renderItem = ({item}) => {
        return(           
            <View style={styles.itemContainer}>
                <View style={styles.row}>                       
                    <Image style={styles.bicyclePicture} source={require('../src/img/bicyclePictures/img1.png')} />
                    <View style={[styles.column, {marginLeft: 20}]}>
                        <Text style={styles.modelText}>{item.model}</Text>
                        <View style={[styles.row, {marginTop: 15}]}>
                            <Text style={styles.rateText}>50 грн/час</Text>
                            <TouchableOpacity style={styles.pickButton}>
                                <Text style={styles.pickButtonText} >Обрати</Text>
                            </TouchableOpacity>
                        </View>
                    </View>                
                </View>
            </View>
            
        )
    }
    
    Timer = () => {
        return (
            <View style={styles.rentAlert}>
                <Text>Что вы хотите?</Text>
            </View>
        )
        
    }

    render() {
        let {show} = this.state
        const {onTouchOutside} = this.props

        

        return(
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >               
                {this.renderOutsideTouchable(onTouchOutside)}
                <View style={styles.modal}>
                    {this.renderTitle()}
                    {this.renderContent()}           
                </View>         
            </Modal>
        );
    }
}

const styles = StyleSheet.create ({
    row: {
        flexDirection: 'row'
    },

    column: {
        flexDirection: 'column'
    },

    modal: {
        backgroundColor: "#C1DB81",
        width: "100%",
        height: 100 + bicyclesAmount*(itemHeight + 15),
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20, 
        paddingHorizontal: 10,
        //maxHeight: deviceHeight * 0.4
    },

    modalHeaderText: {
        color: "#182E44",
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 10
    },

    itemContainer: {
        height: itemHeight,
        width: 350,
        backgroundColor: "#ffffff",        
        marginTop: 15,
        borderRadius: 15 
    },

    modelText: {
        textAlign: 'center',
        fontSize: 18        
    },

    bicyclePicture: {
        height: 90,
        width: 90,
        marginLeft: 10,
        marginBottom:5
    },

    rateText: {
        fontWeight: "700",
        fontSize: 18,
        marginTop: 2 
    },

    pickButton: {
        height: 35,
        width: 90,
        alignItems: "center",
        backgroundColor: "#169BD5",
        marginLeft: 20,
        justifyContent: 'center',
        borderRadius: 15,
    },

    pickButtonText: {
        color: "#ffffff",
        fontSize: 18
    },

    rentAlert: {
        width: "60%",
        height: 400,
        borderRadius: 15,
        backgroundColor: '#bccfc1'
    }

})