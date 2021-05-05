import React from 'react'
import {View, Text, Alert, TouchableOpacity} from 'react-native'

export default class RentAlert extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return(
            Alert.alert(
                "Что вы хотите сделать?"
                [
                    {
                      text: "Забронировать",
                      onPress: () => console.log("Ask me later pressed")
                    },
                    {
                      text: "Арендовать сейчас",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    }                    
                  ]
            )
        )
    }
}