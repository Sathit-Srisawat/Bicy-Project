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
import Login from "./screens/login";
import Registers from "./screens/register";


export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Home" component={Home} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="lock" component={Lock} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Maps" component={Maps} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="TimeCount" component={TimeCount} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Wallet" component={Wallet} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Topup" component={Topup} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Station" component={Station} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Bicy" component={Bicy} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Bicycle" component={Bicycle} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="ReturnStation" component={ReturnStation} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Result" component={Result} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Return" component={Return} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Zone" component={Zone} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Channel" component={Channel} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Problem" component={Problem} options={{
          gestureEnabled: false,
        }} />
        <Drawer.Screen name="Register" component={Registers} options={{
          gestureEnabled: false,
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}