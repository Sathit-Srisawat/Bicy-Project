import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default class Return1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lock: 1,
            id: 4,
            id_bicy: 0,
            station: 0,
            zone: 0,
            channel: 0,
            startDisable: false,
            id_user: 0,
        }
    }

    return = () => {
        fetch('http://128.199.197.229/api/return', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id_user,
                idbike: this.state.id_bicy,
                station: this.state.station,
            }),
        })

        this.props.navigation.navigate('Home');
    };

    updateStation = () => {

        fetch('http://128.199.197.229/api/update_station', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id_bicy,
                station: this.state.station,
                channel: this.state.channel,
                zone_id: this.state.zone
            }),
        });

    };

    Lock = () => {

        fetch('http://128.199.197.229/api/update_lock_channel', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.channel,
                status: 0,
            }),
        });

        this.updateStation();
        this.return();

        this.props.navigation.navigate('Result', { id_user: this.state.id_user });
    };



    render() {

        const { station_id } = this.props.route.params
        const { id_bicy } = this.props.route.params
        const { zone_id } = this.props.route.params
        const { channel } = this.props.route.params
        const { id_user } = this.props.route.params

        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View style={{ alignItems: 'center' }}>
                    <Image style={{ resizeMode: 'contain', alignSelf: 'center', width: 400, height: 400, borderRadius: 15, margin: 10 }} source={require('../img/bicycle.png')} />
                    <Icon name="lock" size={40} color="#000" style={{ position: 'absolute', top: '10%' }} />
                </View>

                <View style={{ position: 'absolute', top: "50%", width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: "#5E78D3", borderRadius: 15 }}>
                    <Text style={{ textAlign: 'center', margin: 50, fontSize: 30, color: '#fff', fontWeight: '700' }}>
                        Once you lock this bike, it uses one key every time
                    </Text>
                </View>


                <View style={{ bottom: '15%', position: 'absolute', alignSelf: 'center' }}>
                    <TouchableOpacity
                        style={[{ alignSelf: 'center', backgroundColor: this.state.startDisable ? '#B0BEC5' : '#111111', width: Dimensions.get('window').width - 110, height: 60, borderRadius: 15, }]}
                        disabled={this.state.startDisable}
                        onPress={() => { this.setState({ id_bicy: id_bicy, station: station_id, zone: zone_id, channel: channel, startDisable: true, id_user: id_user }) }}
                        onPressIn={()=>{
                            fetch('http://128.199.197.229/api/mqtt_request', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    id_user: id_user,
                                    command: (zone_id * 100000) + (station_id * 1000) + (channel * 10) + 1,
                                }),
                            });
                        }}
                        >
                        <Text style={{ color: '#fff', fontSize: 20, marginTop: 15, fontWeight: '700', textAlign: 'center' }} >Confirm</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ bottom: '7%', position: 'absolute', alignSelf: 'center' }}>
                    <TouchableOpacity
                        style={[{ alignSelf: 'center', backgroundColor: this.state.startDisable ? '#111111' : '#B0BEC5', width: Dimensions.get('window').width - 110, height: 60, borderRadius: 15, }]}
                        onPress={this.Lock}
                        onPressIn={() => {

                            fetch('http://128.199.197.229/api/mqtt_request', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    id_user: id_user,
                                    command: (zone_id * 100000) + (station_id * 1000) + (channel * 10) + 2,
                                }),
                            });
                        }}
                        >
                        <Text style={{ color: '#fff', fontSize: 20, marginTop: 15, fontWeight: '700', textAlign: 'center' }} >Lock</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
};