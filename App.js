//import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { Text, View, Button, Stack, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Lock from "./screens/lock";
import Maps from "./screens/maps";
import TimeCount from "./screens/TimeCount";
import Station from "./screens/Stations";
import Wallet from "./screens/Wallet";
import Topup from "./screens/Topup";
import Bicy from "./screens/Bicy";
import Bicycle from "./screens/Bicycle";
import Result from "./screens/Result";
import ReturnStation from "./screens/ReturnStation";
import Return from "./screens/Return";
import Zone from "./screens/Zone";
import Channel from "./screens/Channel";
import Problem from "./screens/Problem";


export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="lock" component={Lock} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Maps" component={Maps} />
        <Drawer.Screen name="TimeCount" component={TimeCount} />
        <Drawer.Screen name="Wallet" component={Wallet} />
        <Drawer.Screen name="Topup" component={Topup} />
        <Drawer.Screen name="Station" component={Station} />
        <Drawer.Screen name="Bicy" component={Bicy} />
        <Drawer.Screen name="Bicycle" component={Bicycle} />
        <Drawer.Screen name="ReturnStation" component={ReturnStation} />
        <Drawer.Screen name="Result" component={Result} />
        <Drawer.Screen name="Return" component={Return} />
        <Drawer.Screen name="Zone" component={Zone} />
        <Drawer.Screen name="Channel" component={Channel} />
        <Drawer.Screen name="Problem" component={Problem} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}