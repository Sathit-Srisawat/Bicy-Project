import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
export default class bicy extends React.Component {

  state = {
    data: [],
    datas: [],
    test: "sathit",
  }

  fetchData = async () => {
    const response = await fetch('http://128.199.197.229/station-api');
    const testTable = await response.json();
    this.setState({ data: testTable });

    const responses = await fetch('http://128.199.197.229/bicycle-api');
    const testTables = await responses.json();
    this.setState({ datas: testTables });

  }

  componentDidMount = () => {
    this.fetchData();
  }

  render() {

    const { id } = this.props.route.params
    const { zone_id } = this.props.route.params
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>

        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <View>
              {item.id == id ?
                <View>
                  <View>
                    <View style={{ alignSelf: 'center', marginTop: 50 }}>
                      <Text style={{ fontSize: 25, fontWeight: '700' }}>Bicy Station {item.id}</Text>
                    </View>

                    <View style={{ alignSelf: 'flex-start' }}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Station')} style={{ flexDirection: 'row' }}>
                        <Icon name="angle-left" size={30} color="#000" style={{ margin: 10 }} />
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', alignSelf: 'center' }} >Back</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <ScrollView>

                    <View>
                      <FlatList
                        data={this.state.datas}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                          <View>
                            {item.station == id ?

                              <TouchableOpacity onPress={() => this.props.navigation.navigate('Bicycle', { type: item.type, id_bicy: item.id, zone_id: zone_id ,channelRent : item.channel })} style={styles.card}>

                                <Text style={{ fontSize: 20, fontWeight: '500', alignSelf: 'center', margin: 10 }}>
                                  {item.type}
                                </Text>

                                <View>
                                  {item.status == 0 ? <Text style={{ fontSize: 15, fontWeight: '400', alignSelf: 'center' }}>available Channel : {item.channel}</Text> : <Text style={{ fontSize: 15, fontWeight: '400', alignSelf: 'center' }}>not available</Text>}
                                </View>

                                <Image style={{ resizeMode: 'contain', alignSelf: 'center', width: 250, height: 150, borderRadius: 15, margin: 10 }} source={require('../img/CyclocrossBike.png')} />
                              </TouchableOpacity>


                              : null}
                          </View>

                        }
                      />
                    </View>
                  </ScrollView>
                </View>
                : null}
            </View>
          }
        />
      </View>
    );
  }
};


const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    width: 350,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#B0BEC5',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    alignSelf: 'center',
    margin: 10
  },
  button: {
    width: Dimensions.get('window').width - 110,
    height: 60,
    backgroundColor: "#B0BEC5",
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#EEA09A',
    shadowOpacity: 0.4,
    shadowRadius: 15,
    alignSelf: 'center'
  },

});