import React from 'react'
import { View, Button, Text, StyleSheet, Pressable, Image} from 'react-native';
import { 
    Title,
    Caption,    
} from 'react-native-paper';

export default class Rules extends React.Component {
    
    render() {
        return (
            <View style={styles.window}>
                <View style={styles.header}>
                    <Pressable onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image style={styles.navbarImage}source={require('../src/img/navbar-icon.png')}/>  
                    </Pressable> 
                    <Text style={styles.text}>Transport Sharing</Text>
                </View>
                <View style={styles.textContainer}>
                    <Title>Умови та положення</Title>
                    <Caption>1. Хто має право на отримання знижки в розмірі 5%

                                1.1 Постійні клієнти

                                До постійним клієнтам відноситься категорія користувачів, які користувалися
                                сервісом більше 5 раз за останній календарний рік.

                                1.2 Сумлінні користувачі

                                Користувачі, які мають високий рейтинг в додатку, тобто не допустили ні; ''
                                одного порушення.

                                2. Хто має право на отримання знижки в розмірі 10%

                                    2.1 Школярі та студенти
                                    При вказівці в профілі навчального закладу, учні та студенти можуть мати знижку протягом усього періоду навчання.

                                2.2 Пенсіонери

                                При додаванні в профіль пенсійного посвідчення користувач може отримати знижку

                                ВАЖЛИВО: Одночасно можна користуватися тільки одним типом знижки. Якщо користувач потрапляє під кілька пунктів даного положення, то він має право вибирати знижку, яка йому підходить.
                    </Caption>
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

    textContainer: {
        paddingHorizontal: 40,
        paddingVertical: 30,
    }
    
})