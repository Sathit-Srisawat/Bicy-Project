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
    Alert
} from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from "react-native-chart-kit";
import { TextInput } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
export default class Problem extends React.Component {

    Report = () => {
        fetch('http://128.199.197.229/api/Report_Problem', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                topic: this.state.topic,
                detail: this.state.detail,
            }),
        })
        
        this.props.navigation.navigate('Home');
    };


    render() {
        return (
            <View style={{ flex: 1 }}>
                
                <Image style={{ height: 300, width: Dimensions.get('window').width }} source={require('../img/problems.jpeg')} />

                <View style={{ position: 'absolute', top: 160, left: 20, right: 0, bottom: 20 }}>
                    <Text style={{ fontSize: 40, fontWeight: '800', color: '#fff' }}>
                        Tell me about problem
                    </Text>
                </View>
                <View style={styles.cards}>

                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#000' }}>
                            Problem Topic
                        </Text>
                    </View>

                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                        <TextInput
                            style={{ height: 40, width: 300, backgroundColor: '#fff' }}
                            placeholder='Problem Topic'
                            onChangeText={(topic) => this.setState({ topic })}
                        />
                    </View>

                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                        <TextInput
                            style={{ height: 300, width: 300, backgroundColor: '#fff' }}
                            placeholder='  Problem Detail'
                            onChangeText={(detail) => this.setState({ detail })}
                        />
                    </View>


                </View>
                <View style={{ bottom: '7%', position: 'absolute', alignSelf: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#111111', width: Dimensions.get('window').width - 110, height: 60, borderRadius: 15 }} onPress={this.Report}>
                        <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 20, marginTop: 15, fontWeight: '700', textAlign: 'center' }} >Report Problem</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({

    cards: {
        alignSelf: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 10,
        position: 'absolute',
        top: 280,
        left: 0,
        right: 0,
        bottom: 0,
    },

    button: {
        marginLeft: Dimensions.get('window').width / 3,
        width: 150,
        height: 50,
        marginTop: 30,
        backgroundColor: "#f6f5f5",
        borderRadius: 15,
        elevation: 10,
    }
});