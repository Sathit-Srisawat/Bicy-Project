import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          content: "",
        };
      }

      componentDidMount(){
         fetch('http://echo.jsontest.com/goodbye/world')
          .then((response) => response.json())
          .then((responseJson) => {
           this.setState({content: responseJson});
          })
          .catch((error) => {
            console.error(error);
          });
      }

      render() {
        return (
          <Text>{this.state.content.goodbye}</Text>
        )
      }
    }
    