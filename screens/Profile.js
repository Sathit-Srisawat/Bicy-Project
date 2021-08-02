import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
  navigation,
  Image,
  LogBox,
  Dimensions
} from 'react-native';

LogBox.ignoreAllLogs();

import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15, height: 300, width: Dimensions.get('window').width }} blurRadius={3} source={require('../img/background.jpg')} />

        <View style={{ position: 'absolute', top: 120, marginTop: 10, alignSelf: "center" }}>
          <Image style={{ width: 100, height: 100, borderRadius: 15 }} source={require('../img/profile.jpg')} />
        </View>

        <View style={styles.card}>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: "#000", fontSize: 20 }}>
              Sathit Srisawat
            </Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: "#000", fontSize: 15 }}>
              WU | Compter Engineering
            </Text>
          </View>
        </View>

        <View style={{ position: 'absolute', top: 50, left: 20, right: 0, bottom: 20, flexDirection: 'row' }}>
          <View style={{ marginTop: 2 }}>
            <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="angle-left" size={30} color="#fff2e7" />
            </TouchableOpacity>
          </View>
          <View>
            <Button
              title='Home'
              color='#fff2e7'
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        </View>
      </View >
    );
  }
};
const styles = StyleSheet.create({

  card: {
    alignSelf: "center",
    width: 300,
    height: 80,
    marginTop: 10,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    position: 'absolute',
    top: 240
  },
});