import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Dimensions,
  navigation,
  FlatList,
  Image,
  Alert,
  navigate
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'
Icon.loadFont();


export default class Food extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        lock : 0,
        unlock : 1,
        id : 4,
    }
  }

  Lock = () => {
    fetch('http://128.199.197.229/api/update', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        fuck: this.state.lock,
      }),
    })
    
      .then((response) => response.text())
      .then((responseJson) => {
        Alert.alert('Complete');
      })
      .catch((error) => {
        console.error(error);
      });
  };


  Unlock = () => {
    fetch('http://128.199.197.229/api/update', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        fuck: this.state.unlock,
      }),
    })
    
      .then((response) => response.text())
      .then((responseJson) => {
        Alert.alert('Complete');
      })
      .catch((error) => {
        console.error(error);
      });
  };



  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ margin: 50, alignItems: 'center' }}>
          <Text>LOCK</Text>
          
          <View style = {{marginTop : 300 ,backgroundColor : '#7eca9c' ,width : 300 ,height :50}}>
            <Button
              title='Lock'
              color='#fff'
              onPress={this.Unlock}
            />
          </View>

          <View style = {{margin : 20 ,backgroundColor : '#ac0d0d' ,width : 300 ,height : 50}}>
            <Button
              title='Unlock'
              color='#fff'
              onPress={this.Lock}
            />
          </View>

          <View style = {{margin : 20 ,backgroundColor : '#ac0d0d' ,width : 300 ,height : 50}}>
            <Button
              title='Home'
              color='#fff'
              onPress={() => this.props.navigation.navigate('Home')}
            />

          </View>

        </View>
      </View>
    );
  }
};