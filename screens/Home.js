import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper'

export default class Home extends React.Component {

  state = {
    data: [],
  }

  fetchData = async () => {
    const response = await fetch('http://128.199.197.229/balance');
    const testTable = await response.json();
    this.setState({ data: testTable });

  }

  componentDidMount = () => {
    this.fetchData();
  }

  render() {

    const { id_user } = this.props.route.params

    return (
      <View style={{ flex: 1 }}>
        <View>
          <Image
            style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
            source={require('../img/theme.png')}
          />
        </View>

        <View style={{ position: 'absolute', top: 50, flexDirection: 'row', width: Dimensions.get('window').width }}>
          <View>
            <Text style={{ margin: 20, fontSize: 40, fontWeight: '500', color: '#361f29' }}>
              Bicy
            </Text>
          </View>

          <View>
            <TouchableOpacity style={{ left: 220 }} onPress={() => this.props.navigation.navigate('Profile')} >
              <Image style={{ width: 50, height: 50, borderRadius: 15, marginTop: 15 }} source={require('../img/profile.jpg')} />
              <Text style={{ marginTop: 10, marginRight: 4, alignSelf: 'center', fontSize: 15, fontWeight: '600', color: '#fff' }}> Profile </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Zone' , {id_user : id_user})}>
          <Text style={{ textAlign:'center',margin: 30, fontSize: 30, fontWeight: '600', color: '#49343d' }}>
            Station
          </Text>
          <Image style={{ alignSelf:'center',width: 150, height: 150, borderRadius: 15, marginLeft: 10, marginRight: 10 }} source={require('../img/station.png')} />
        </TouchableOpacity>

        <View style={styles.cardmini}>
          <Text style={{ textAlign:'center',margin: 30, fontSize: 30, fontWeight: '600', color: '#49343d', alignSelf: 'center' }}>
            Balance
          </Text>
          <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <View >
                  <Text style={{ fontSize: 25, fontWeight: '600', color: '#49343d', alignSelf: 'center' }}>{item.balance} ฿</Text>
                </View>
              }
            />
        </View>

        <TouchableOpacity style={styles.card2} onPress={() => this.props.navigation.navigate('Wallet')}>
          <Text style={{ textAlign:'center',margin: 30, fontSize: 30, fontWeight: '600', color: '#49343d' }}>
            Wallet
          </Text>
          <Image style={{ alignSelf:'center',width: 150, height: 150, borderRadius: 15, marginLeft: 10, marginRight: 10, marginBottom: 15 }} source={require('../img/wallet.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card3} onPress={() => this.props.navigation.navigate('Topup')}>
          <Text style={{ textAlign:'center',margin: 30, fontSize: 30, fontWeight: '600', color: '#49343d' }}>
            Top up
          </Text>
          <Image style={{ alignSelf:'center',width: 150, height: 150, borderRadius: 15, marginLeft: 10, marginRight: 10, marginBottom: 15 }} source={require('../img/topup.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card4} onPress={() => this.props.navigation.navigate('Problem')}>
          <Text style={{ textAlign:'center',marginTop: 30,marginLeft:30,marginRight:30, fontSize: 20, fontWeight: '600', color: '#49343d' }}>
            Report Problem
          </Text>
          <Image style={{ alignSelf:'center',width: 150, height: 150, borderRadius: 15, marginLeft: 10, marginRight: 10, marginBottom: 15 }} source={require('../img/problem.png')} />
        </TouchableOpacity>

      </View>
    );
  }
};

const styles = StyleSheet.create({

  card: {
    marginLeft: 10,
    width: 190,
    height: 300,
    backgroundColor: '#fff2e7',
    borderRadius: 15,
    position: 'absolute',
    top: 140
  },
  cardmini: {
    marginLeft: 215,
    width: 190,
    height: 150,
    backgroundColor: '#fff2e7',
    borderRadius: 15,
    position: 'absolute',
    top: 170
  },
  card2: {
    marginLeft: 215,
    width: 190,
    height: 300,
    backgroundColor: '#fff2e7',
    borderRadius: 15,
    position: 'absolute',
    top: 340
  },
  card3: {
    marginLeft: 10,
    width: 190,
    height: 300,
    backgroundColor: '#fff2e7',
    borderRadius: 15,
    position: 'absolute',
    top: 460
  },
  card4: {
    marginLeft: 215,
    width: 190,
    height: 170,
    backgroundColor: '#fff2e7',
    borderRadius: 15,
    position: 'absolute',
    top: 660
  },
  card5: {
    marginLeft: 10,
    width: 190,
    height: 100,
    backgroundColor: '#fff2e7',
    borderRadius: 15,
    position: 'absolute',
    top: 780
  },
  
  button2: {
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