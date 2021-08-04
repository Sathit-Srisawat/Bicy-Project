import React from 'react';
import { LogBox, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from "react-native-chart-kit";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default class Login extends React.Component {

    state = {
        data: [],
        email: '',
        password: '',
        root_email: '',
        root_password: '',
    }

    fetchData = async () => {
        const response = await fetch('http://128.199.197.229/userall');
        const jsons = await response.json();
        this.setState({ data: jsons });
        console.log(data);

    }

    componentDidMount = () => {
        this.fetchData();
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={{ textAlign: 'center', alignItems: 'center', marginTop: 50, fontSize: 20, fontWeight: '500' }}>
                        Login
                    </Text>
                </View>

                <Image style={{ alignSelf: 'center', width: 300, height: 300, borderRadius: 15 }} source={require('../img/logo.png')} />

                <View style ={{marginTop : 10}}>

                    <TextInput
                        style={styles.input}
                        onChangeText={(email) => this.setState({ email })}
                        placeholder="   Username"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder="   Password"
                    />

                </View>

                <View style={{ top: 20 }}>

                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <View >
                                {this.state.email == item.email && this.state.password == item.password ?

                                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home' ,{id_user : item.id})}>
                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700', alignSelf: 'center',marginTop : 15 }} >Login</Text>
                                        </TouchableOpacity>
                                    : null}
                            </View>
                        }
                    />

                </View>


                <View style={{ position: 'absolute', bottom: '6%', alignSelf: 'center', flexDirection: 'row' }}>

                    <Text style={{ marginTop: 10, fontSize: 15 }}>
                        Don't have an account?
                    </Text>

                    <Button
                        title='Signup here'
                        onPress={() => this.props.navigation.navigate('Register')}
                    />

                </View>





            </View>
        );
    }
};


const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        width: 300,
    },
    button: {
        width: Dimensions.get('window').width - 110,
        height: 60,
        backgroundColor: "#75c971",
        borderRadius: 15,
        elevation: 10,
        shadowColor: '#75c971',
        shadowOpacity: 0.4,
        shadowRadius: 15,
        alignSelf: 'center',
        marginTop : 150,
    },


});