import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';
export default class Home extends React.Component {

  state = {
    data: [],
    history: []
  }

  fetchData = async () => {
    const response = await fetch('http://128.199.197.229/balance');
    const testTable = await response.json();
    this.setState({ data: testTable });

    const responses = await fetch('http://128.199.197.229/historybalance');
    const testTables = await responses.json();
    this.setState({ history: testTables });

  }

  componentDidMount = () => {
    this.fetchData();
  }


  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ marginTop: 30, alignSelf: 'flex-start' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ flexDirection: 'row' }}>
            <Icon name="angle-left" size={30} color="#000" style={{ margin: 10 }} />
            <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', alignSelf: 'center' }} >Back</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '700' }}>
            Bicy Wallet
              </Text>
        </View>

        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '700' }}>
            Hi Sathit 0801455967
          </Text>
        </View>

        <View style={styles.card}>
          <View style={{ margin: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>
              Bicy Balance
                    </Text>
          </View>

          <View style={{ marginTop: 15, alignItems: 'center' }}>
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                  <Text style={{ fontSize: 40 }}>{item.balance} ฿</Text>
                </View>
              }
            />
          </View>
        </View>

        <View style={styles.card1}>
          <View style={{ alignItems: 'center', margin: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>
              Statement
            </Text>
          </View>

          <ScrollView style={{ margin: 20 }}>
            <FlatList
              data={this.state.history}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <View style={{marginBottom:10}}>
                  {item.id == 61113544 ?
                    <View>
                      {item.receipt == 0 ? null : <Text style={{textAlign:'center'}}>Receipt {item.receipt}{'\n\n'}{item.created_at}</Text>}
                    <View>
                        {item.transfer == 0 ? null : <Text style={{textAlign:'center'}}>Transfer {item.transfer}{'\n\n'}{item.created_at}</Text>}
                    </View>
                    </View>

                    : null
                  }
                </View>
              }
            />
          </ScrollView>
        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({

  card: {
    alignSelf: 'center',
    width: 350,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#B0BEC5',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    margin: 20
  },
  card1: {
    alignSelf: 'center',
    width: 350,
    height: 420,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#B0BEC5',
    shadowOpacity: 0.2,
    shadowRadius: 15,
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