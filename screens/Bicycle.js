import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default class Bicycle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            datas: [],
            test: "sathit",
        }
    }


    fetchData = async () => {
        const response = await fetch('http://128.199.197.229/bicycle-api');
        const testTable = await response.json();
        this.setState({ data: testTable });

    }

    componentDidMount = () => {
        this.fetchData();
    }

    render() {

        const { type } = this.props.route.params
        const { id_bicy } = this.props.route.params
        const { zone_id } = this.props.route.params
        const { channelRent } = this.props.route.params
        const { station_id } = this.props.route.params
        const { id_user } = this.props.route.params

        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height / 3, borderRadius: 15 }}>

                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <View >
                                {item.type == type ?
                                    <Image
                                        style={{ resizeMode: 'contain', width: Dimensions.get('window').width, height: Dimensions.get('window').height / 2.5 }}
                                        source={{ url: item.url }}
                                    />
                                    : null}
                            </View>
                        }
                    />

                    <View style={{ position: 'absolute', top: 50, left: 20, right: 0, bottom: 20, flexDirection: 'row' }}>
                        <View style={{ marginTop: 2 }}>
                            <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => this.props.navigation.navigate('Bicy')}>
                                <Icon name="angle-left" size={30} color="#6A6867" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Button
                                title='Back'
                                color='#000'
                                onPress={() => this.props.navigation.navigate('Bicy')}
                            />
                        </View>
                    </View>

                </View>

                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <View>
                            {item.type == type ?

                                <View style={styles.card}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View>
                                            <Text style={{ fontSize: 15, fontWeight: '600' }}>
                                            Advised for
                                            </Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: '#EEA09A', fontSize: 15, fontWeight: '600', marginTop: 10 }}>
                                                    {item.advised}
                                                </Text>
                                                <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '600' }}> cm height</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: 160 }}>
                                            <Text style={{ fontSize: 15, fontWeight: '600' }}>
                                                Bath / min
                                            </Text>
                                            <Text style={{ color: '#EEA09A', fontSize: 15, fontWeight: '600', marginTop: 10, marginLeft: 25 }}> {item.bath}</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <View>
                                            <Text style={{ color: '#000', alignSelf: 'center', margin: 30, marginTop: 50, fontSize: 23, fontWeight: '600' }}>
                                                Detail - {item.type}
                                            </Text>
                                            <Text style={{ margin: 20, fontSize: 16 }}>
                                                {item.detail}
                                            </Text>
                                        </View>
                                    </View>

                                </View>

                                : null}
                        </View>

                    }
                />

                <View style={styles.button}>
                    <TouchableOpacity
                        style={{ alignSelf: 'center' }}
                        onPress={() => {
                            fetch('http://128.199.197.229/api/update_lock_channel', {
                                method: 'PUT',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    id: channelRent,
                                    status: 1,
                                }),
                            });
                        }}

                        onPressIn={()=>{
                            fetch('http://128.199.197.229/api/mqtt_request', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    id_user: id_user,
                                    command: (zone_id * 100000) + (station_id * 1000) + (channelRent * 10) + 1,
                                }),
                            });

                            () =>{

                                fetch('http://128.199.197.229/api/history_rent', {
                                    method: 'POST',
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        user_id: id_user,
                                        bike_id: id_bicy,
                                    }),
                                });
    
                            }
                        }
                        
                        }
                        onPressOut={() => this.props.navigation.navigate('TimeCount', { id_bicy: id_bicy, zone_id: zone_id, channelRent: channelRent ,id_user:id_user})}>
                        <Text style={{ color: '#fff', fontSize: 20, marginTop: 15, fontWeight: '700' }} >Rent Bicycle</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
};


const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width - 110,
        height: 60,
        backgroundColor: "#EEA09A",
        borderRadius: 15,
        elevation: 10,
        shadowColor: '#EEA09A',
        shadowOpacity: 0.4,
        shadowRadius: 15,
        alignSelf: 'center',
        position: 'absolute',
        bottom: '8%'
    },

    card: {
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height / 2.1,
        borderRadius: 15,
        elevation: 10,
        alignSelf: 'center',
        margin: 40,
    }
});