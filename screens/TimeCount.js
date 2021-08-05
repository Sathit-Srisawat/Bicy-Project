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
    Image
} from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
    Alert
} from "react-native-chart-kit";

import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'

Icon.loadFont();
export default class TimeCount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            timer: null,
            minutes_Counter: '00',
            seconds_Counter: '00',
            startDisable: true,
            autoStart: true,
            money: '',
            moneyed: '',
            balance: '',
            id:0,
            channelRent : 0,
        }
    }


    purchase = () => {
        fetch('http://128.199.197.229/api/purchase', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id,
                balance: this.state.moneyed,
            }),
        });

        fetch('http://128.199.197.229/api/pocket', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 1,
                total: this.state.moneyed,
            }),
        });
    };

    history = () => {

        fetch('http://128.199.197.229/api/historyup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id,
                transfer: this.state.moneyed,
            }),
        });

        fetch('http://128.199.197.229/api/history_pocket', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                receive: this.state.moneyed,
            }),
        });
        
    };

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    onButtonStart = () => {

        let timer = setInterval(() => {
            var num = (Number(this.state.seconds_Counter) + 1).toString(),
                count = this.state.minutes_Counter,
                moneys = (Number(this.state.money) + 1).toString();

            if (Number(this.state.seconds_Counter) == 59) {
                count = (Number(this.state.minutes_Counter) + 1).toString();
                num = '00';

            }

            this.setState({
                minutes_Counter: count.length == 1 ? '0' + count : count,
                seconds_Counter: num.length == 1 ? '0' + num : num,
                money: moneys,
                moneyed: moneys * 0.003,
            });
        }, 1000);
        this.setState({ timer });
        this.setState({ startDisable: true })


    }


    onButtonStop = () => {
        console.log("charge" + this.state.moneyed + " baht");
        this.purchase();
        this.history();
        clearInterval(this.state.timer);
        clearInterval(this.state.money);
        this.setState({
            startDisable: false
        });
    }

    componentDidMount() {
        this.onButtonStart();
    }

    render() {

        const {id_bicy} = this.props.route.params
        const { zone_id } = this.props.route.params
        const { channelRent } = this.props.route.params
        const { id_user } = this.props.route.params

        return (
            <View style={{ flex: 1 }}>
                
                <View style={{ flex: 0.4 }}>
                    <Image style={{ height: 300, width: Dimensions.get('window').width }} source={require('../img/2.jpg')} />

                    <View style={{ position: 'absolute', top: 50, left: 20, right: 0, bottom: 20, flexDirection: 'row' }}>
                        <View style={{ marginTop: 2 }}>
                            <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name="angle-left" size={30} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Button
                                title='Home'
                                color='#fff'
                                onPress={() => this.props.navigation.navigate('Home')}
                            />
                        </View>
                    </View>

                    <View style={{ position: 'absolute', top: 200, left: 20, right: 0, bottom: 20 }}>
                        <Text style={{ fontSize: 50, fontWeight: '800', color: '#fff' }}>
                            Time Counting
                        </Text>
                    </View>

                    <View style={styles.cards}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.card1}>
                                <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 30, fontWeight: '800' }}>
                                    TIME 
                                </Text>

                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.cardin}>
                                        <View style={{ margin: 20 }}>
                                            <Text style={styles.counterText}>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>
                                        </View>

                                        <Text style={{ alignSelf: 'center', fontSize: 18, marginTop: 10 }}>
                                            Have a good day
                                        </Text>

                                        <Text style={{ alignSelf: 'center', fontSize: 16, marginTop: 20 }}>
                                            " Advantages of cycling "
                                            {'\n'}{'\n'} " Helps to sleep deeper "
                                            {'\n'}{'\n'} " Your face look younger "

                                        </Text>

                                        <View style={{ bottom: 80, position: 'absolute', alignSelf: 'center' }}>
                                            <TouchableOpacity
                                                onPress={() => { this.setState({ id: id_user}) }}
                                                onPressOut={this.onButtonStop}
                                                activeOpacity={0.6}
                                                style={[styles.button, { backgroundColor: this.state.startDisable ? '#FF6F00' : '#B0BEC5', width: 250, height: 50 }]}>
                                                <Text style={styles.buttonText}>Stop</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ bottom: 20, position: 'absolute', alignSelf: 'center' }}>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('ReturnStation' , {id_bicy : id_bicy ,zone_id : zone_id ,id_user:id_user})}
                                                activeOpacity={0.6}
                                                style={[styles.button, { backgroundColor : this.state.startDisable ? '#B0BEC5' : '#FF6F00', width: 250, height: 50 }]} 
                                                disabled={this.state.startDisable}>
                                                <Text style={styles.buttonText}>Lock</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

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
    card1: {
        width: 360,
        height: 500,
        marginTop: 20,
        backgroundColor: "#fff",
        borderRadius: 15,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    cardin: {
        width: 340,
        height: 410,
        marginTop: 20,
        backgroundColor: "#fff",
        borderRadius: 15,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: '80%',
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 7,
        marginTop: 10,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    counterText: {
        alignSelf: 'center',
        fontSize: 40,
        color: '#000'
    }
});