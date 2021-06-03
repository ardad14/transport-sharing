import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/drawer';
import EntryPage from '../screens/EntryPage.js';
import BicyclePage from '../screens/BicyclePage.js';
import RegisterPage from '../screens/RegisterPage.js';
import ScooterPage from '../screens/ScooterPage.js'
import CarPage from '../screens/CarPage.js';
import Profile from '../screens/Profile.js';
import AllRecords from '../screens/AllRecords.js';
import Documents from '../screens/Documents.js';
import Settings from '../screens/Settings.js';
import Rules from '../screens/Rules.js';
import Help from '../screens/Help.js';
import SidebarContent from '../screens/SidebarContent.js'
import RentAlert from '../screens/RentAlert.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function chooseVehicle() 
{
    return(
        <Tab.Navigator >
            <Tab.Screen 
                name="BicyclePage"
                options={
                    {tabBarVisible: false}
                }            
                component={BicyclePage} 
            />
            <Tab.Screen 
                name="ScooterPage" 
                options={
                    {tabBarVisible: false}
                }     
                component={ScooterPage}
            />
            <Tab.Screen 
                name="CarPage" 
                options={
                    {tabBarVisible: false}
                } 
                component={CarPage} 
            />
            <Tab.Screen 
                name="RentAlert" 
                options={
                    {tabBarVisible: false}
                } 
                component={RentAlert} 
            />

        </Tab.Navigator>
    );
}

function stackNavigator()
{
    return (
        <Stack.Navigator initialRouteName="EntryPage" headerMode='none'>
            <Stack.Screen name="EntryPage" component={EntryPage} />
            <Stack.Screen name="RegisterPage" component={RegisterPage} />                
            <Stack.Screen name="chooseVehicle" component={chooseVehicle} />
            <Stack.Screen name="RentAlert" component={RentAlert} />            
        </Stack.Navigator>   
    );          
}

export default class AppNavigator extends React.Component 
{
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator drawerContent={(props) => <SidebarContent {...props}/>}>
                    <Drawer.Screen name="EntryFunction" component={stackNavigator} />    
                    <Drawer.Screen name="EntryPage" component={EntryPage} />
                    <Drawer.Screen name="Profile" component={Profile} />         
                    <Drawer.Screen name="AllRecords" component={AllRecords} />
                    <Drawer.Screen name="Documents" component={Documents} />
                    <Drawer.Screen name="Settings" component={Settings} />
                    <Drawer.Screen name="Rules" component={Rules} />
                    <Drawer.Screen name="Help" component={Help} />         
                </Drawer.Navigator>                             
            </NavigationContainer>

        );           

    }   

};
  