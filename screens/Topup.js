import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';
export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      balance : 0,
    }
  }

  history = () => {
    fetch('http://128.199.197.229/api/historyup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        receipt: this.state.balance,
      }),
    })
  };


  Topup = () => {
    fetch('http://128.199.197.229/api/topup', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        balance: this.state.balance,
      }),
    })

      .then((response) => response.text())
      .then((responseJson) => {
        Alert.alert('Complete');
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(this.state.id);
    console.log(this.state.balance);

    this.history();
    this.props.navigation.navigate('Home');
  };


  render() {
    const { id_user } = this.props.route.params
    //{this.setState({id : id_user})}
    return (
      <View style={{ flex: 1 }}>

      

        <View style={{ marginTop: 30, alignSelf: 'flex-start' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ flexDirection: 'row' }}>
            <Icon name="angle-left" size={30} color="#000" style={{ margin: 10 }} />
            <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', alignSelf: 'center' }} >Back</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 8, alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '700' }}>Top up </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.card} onPress={() => { this.setState({ id: id_user , balance : 10}) }} onPressOut={this.Topup}>
            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, right: 0, left: 0, bottom: 0 }}>
              <Text style={{ fontSize: 20, fontWeight: '700' }}>10฿</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}onPress={() => { this.setState({ id: id_user , balance : 20}) }} onPressOut={this.Topup}>
            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, right: 0, left: 0, bottom: 0 }}>
              <Text style={{ fontSize: 20, fontWeight: '700' }}>20฿</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => { this.setState({ id: id_user , balance : 30}) }} onPressOut={this.Topup}>
            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, right: 0, left: 0, bottom: 0 }}>
              <Text style={{ fontSize: 20, fontWeight: '700' }}>30฿</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({

  card: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#B0BEC5',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    marginTop: 50,
    margin: 10,
  },
  button: {
    width: Dimensions.get('window').width - 110,
    height: 60,
    backgroundColor: "#B0BEC5",
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#B0BEC5',
    shadowOpacity: 0.4,
    shadowRadius: 15,
    alignSelf: 'center'
  },
});