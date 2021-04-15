import React from 'react';
import {      
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    DrawerActions
     } from '@react-navigation/drawer';


export default function SidebarContent({navigation}) {
    return (
      <DrawerContentScrollView>
        <DrawerItem
          label="Close drawer"
          onPress={() => 5}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => 5}
        />
      </DrawerContentScrollView>
    );
  }