import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {      
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    DrawerActions
     } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

export default class SidebarContent extends React.Component
{
  constructor(...props) {
    super(...props)

  }

  render() {
      return (
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
              <View style={styles.row}>
                  <Avatar.Image 
                      source={require('../src/img/user-avatar.jpg')}
                      style={styles.userAvatar}
                  />
                  <View style={styles.userInfo}>
                    <Title style={styles.title}>Артем Купцов</Title>
                    <Caption style={styles.city}>Харків</Caption>
                  </View>
              </View>
              <View style={styles.column}>
                  <View style={styles.moneyInfo}>
                      <View style={styles.row}>                
                          {<Icon
                              name='credit-card-check'
                              size={30}
                              style={styles.creditCard}
                          />}
                          <Paragraph style={styles.paragraph}>20 UAH</Paragraph>
                          <TouchableOpacity style={styles.addMoneyButton}>
                              <Text style={styles.addMoneyText}>Поповнити</Text>
                          </TouchableOpacity>
                      </View> 
                  </View>
              </View>
          </View>
          <View style={styles.pageContent}>
              <DrawerItem
                  icon={({color, size}) => (
                  <Icon
                      name='map-outline'
                      color={color}
                      size={size}
                  />
                  )}
                  label="Карта"
                  onPress={() => this.props.navigation.navigate('chooseVehicle')}
              />

              <DrawerItem
                  icon={({color, size}) => (
                  <Icon
                      name='archive-outline'
                      color={color}
                      size={size}
                  />
                  )}
                  label="Усі сеанси аренди"
                  onPress={() => this.props.navigation.navigate('AllRecords')}
              />

              <DrawerItem
                  icon={({color, size}) => (
                  <Icon
                      name='card-account-details-outline'
                      color={color}
                      size={size}
                  />
                  )}
                  label="Документи"
                  onPress={() => this.props.navigation.navigate('Documents')}
              />     

              <DrawerItem
                  icon={({color, size}) => (
                  <Icon
                      name='brightness-5'
                      color={color}
                      size={size}
                  />
                  )}
                  label="Налаштування"
                  onPress={() => this.props.navigation.navigate('Settings')}
              />     

              <DrawerItem
                  icon={({color, size}) => (
                  <Icon
                      name='comment-text-multiple-outline'
                      color={color}
                      size={size}
                  />
                  )}
                  label="Правила"
                  onPress={() => this.props.navigation.navigate('Rules')}
              />     

              <DrawerItem
                  icon={({color, size}) => (
                  <Icon
                      name='help-circle-outline'
                      color={color}
                      size={size}
                  />
                  )}
                  label="Допомога"
                  onPress={() => this.props.navigation.navigate('Help')}
              />                       

              <DrawerItem
                  icon={({color, size}) => (
                  <Icon
                      name='exit-to-app'
                      color={color}
                      size={size}
                  />
                  )}
                  label="Вийти"
                  onPress={() => this.props.navigation.navigate('EntryPage')}
              />
            </View>
        </View>            
            
          
        
      );
  }
}

const styles = StyleSheet.create({

    row: {
      flexDirection: 'row',
    },

    column: {
      flexDirection: 'column',
    },

    drawerContent: {
        marginTop: 40,
    },

    userInfoSection: {
        marginLeft: 20,
        height: '17%'
    },

    userInfo: {
      marginLeft: 25,
    },

    title: {
      fontSize: 19,
      marginTop: 5,
      fontWeight: 'bold'
    },

    city: {
      fontSize: 15,
      marginTop: -3,
    },

    moneyInfo: {
        marginTop: 20,      
      
    },

    paragraph: {
      fontSize: 16,
      marginTop: 8,
      marginRight: 20,
      fontWeight: 'bold'
    },

    addMoneyButton: {
      height: 35,
      width: 105,
      alignItems: "center",
      backgroundColor: "#169BD5",      
      justifyContent: 'center',
      borderRadius: 7,
      color: '#fff'

    },

    addMoneyText: {
      fontSize: 17,
      color: '#fff'
    },

    creditCard: {
      marginRight: 15
    },

    pageContent: {
        backgroundColor: '#C1DB81',
        width: '100%',
        height: '100%',
    },

    

})