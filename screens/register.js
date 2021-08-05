import React from 'react';
import { LogBox, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default class Register extends React.Component {

    create_wallet = () => {
        
        fetch('http://128.199.197.229/api/create_wallet', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id : this.state.id,
                balance: 0,
            })
        })
    };

    register = () => {

        fetch('http://128.199.197.229/api/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                id : this.state.id,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                phonenumber : this.state.phonenumber,
                idcard : this.state.idcard,
                email: this.state.email,
                password: this.state.password,
                profile: this.state.profile,
            })
        })
            .then((response) => response.text())
            .then((responseJson) => {
                Alert.alert('Complete');
            })
            .catch((error) => {
                console.error(error);
            });
        this.create_wallet();

        this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View>
                    <Text style={{ textAlign: 'center', alignItems: 'center', marginTop: 50, fontSize: 20, fontWeight: '500' }}>
                        Register
                    </Text>
                </View>

                <View style={{ alignSelf: 'flex-start', position: 'absolute', top: '8%' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ flexDirection: 'row' }}>
                        <Icon name="angle-left" size={30} color="#000" style={{ margin: 10 }} />
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', alignSelf: 'center' }} >Back</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ top: '10%', alignItems: 'center' }}>

                    <TextInput
                        style={styles.input}
                        onChangeText={(id) => this.setState({ id })}
                        placeholder="   ID"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(firstname) => this.setState({ firstname })}
                        placeholder="   Firstname"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(lastname) => this.setState({ lastname })}
                        placeholder="   Lastname"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(phonenumber) => this.setState({ phonenumber })}
                        placeholder="   Phone Number"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(idcard) => this.setState({ idcard })}
                        placeholder="   ID Card "
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(email) => this.setState({ email })}
                        placeholder="   E-mail"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder="   Password"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(profile) => this.setState({ profile })}
                        placeholder="   URL profile"
                    />

                </View>


                <View style={{ position: 'absolute', bottom: '8%', alignSelf: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={this.register}>
                        <Text style={{ color: '#fff', fontSize: 20, marginTop: 15, fontWeight: '700', alignSelf: 'center' }} >Register</Text>
                    </TouchableOpacity>
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
        backgroundColor: "#2077d6",
        borderRadius: 15,
        elevation: 10,
        shadowColor: '#2077d6',
        shadowOpacity: 0.4,
        shadowRadius: 15,
        alignSelf: 'center'
    },


});