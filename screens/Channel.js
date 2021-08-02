import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';

export default class Channel extends React.Component {

  state = {
    data: [],
  }

  fetchData = async () => {
    const response = await fetch('http://128.199.197.229/lock_unlock_api');
    const testTable = await response.json();
    this.setState({ data: testTable });

  }

  componentDidMount = () => {
    this.fetchData();
  }

  render() {

    const { id_bicy } = this.props.route.params
    const { zone_id } = this.props.route.params
    const { id } = this.props.route.params //id station

    return (
      <View style={{ flex: 1 }}>

        <View style={{ marginTop: 30, alignSelf: 'flex-start' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ReturnStation')} style={{ flexDirection: 'row' }}>
            <Icon name="angle-left" size={30} color="#000" style={{ margin: 10 }} />
            <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', alignSelf: 'center' }} >Back</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 8, alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '700' }}>Chanell</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                {item.station == id ?
                  <View>
                    {item.status == 1 ?
                      <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Return', { id_bicy: id_bicy, zone_id: zone_id, station_id: id, channel: item.id })}>
                        <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, right: 0, left: 0, bottom: 0 }}>
                          <Text style={{ fontSize: 20, fontWeight: '700' }}>{item.id}</Text>
                        </View>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity style={styles.cards}>
                        <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, right: 0, left: 0, bottom: 0 }}>
                          <Text style={{ fontSize: 20, fontWeight: '700' }}>{item.id} Full</Text>
                        </View>
                      </TouchableOpacity>
                      }
                  </View>
                  : null}
              </View>
            }
            numColumns={3}
          />

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
    alignSelf: 'center'

  },
  cards: {
    width: 100,
    height: 100,
    backgroundColor: '#ED8E7C',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#B0BEC5',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    marginTop: 50,
    alignSelf: 'center'

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