import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';

export default class Zone extends React.Component {

  state = {
    data: [],
  }

  fetchData = async () => {
    const response = await fetch('http://128.199.197.229/zone_api');
    const testTable = await response.json();
    this.setState({ data: testTable });

  }

  componentDidMount = () => {
    this.fetchData();
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style = {{marginTop : 50}}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <View >
                  <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Maps' , {zone_id : item.id })}>
                    <View style={{ position: 'absolute', top: '8%', alignSelf: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: '500' }}>
                        BICY Zone {item.zone}
                      </Text>

                      <Image style={{ alignSelf: 'center', width: 250, height: 150, borderRadius: 15, margin: 10 }} source={{url: item.url}} />
                      
                    </View>

                  </TouchableOpacity>
              </View>
            }
          />

        </ScrollView>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    width: 350,
    height: 220,
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