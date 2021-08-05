import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert, navigation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default class Profile extends React.Component {

    render() {

        const {zone_id} = this.props.route.params
        const { id_user } = this.props.route.params

        return (
            <View style={{ flex: 1 }}>
                
                <MapView
                
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 8.645297,
                        longitude: 99.897332,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>

                    <Marker coordinate={{ latitude: 8.645297, longitude: 99.897332 }}
                        pinColor={"purple"} // any color
                        title={"BICY Station 1"}
                        description={"Rent Bicycle อาคารไทยบุรี มหาวิทยาลัยวลัยลักษณ์"} />

                    <Marker coordinate={{ latitude: 8.647390, longitude: 99.893727 }}
                        pinColor={"purple"} // any color
                        title={"BICY Station 2"}
                        description={"Rent Bicycle องค์การบริหาร (อบ) มหาวิทยาลัยวลัยลักษณ์"} />

                    <Marker coordinate={{ latitude: 8.643979, longitude: 99.892884 }}
                        pinColor={"purple"} // any color
                        title={"BICY Station 3"}
                        description={"Rent Bicycle อาคารสถาปัตยกรรมฯ มหาวิทยาลัยวลัยลักษณ์"} />

                </MapView>

                <View style={{ position: 'absolute', bottom: '8%', alignSelf: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Station', {zone_id : zone_id , id_user : id_user})}>
                            <Text style={{ color: '#fff', fontSize: 20, marginTop: 15, fontWeight: '700' , alignSelf : 'center' }} >Find Stations</Text>
                        </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: '300', color: '#424554', textAlign: 'center', marginTop: 20 }}>Walailak University</Text>
                    <Text style={{ fontSize: 18, fontWeight: '300', color: '#424554', textAlign: 'center', marginTop: 10 }}>Bicy Station </Text>
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
        alignSelf: 'center'
    },
    button2: {
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
    card: {
        width: Dimensions.get('window').width - 60,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 15,
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 15,
        alignSelf: 'center',
        marginTop: 50,
        position: 'absolute',
    }
});