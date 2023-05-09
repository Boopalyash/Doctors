import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, FlatList, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DATA = [
    {
        id: '1',
        doctorName: 'Dr.Richard Antony',
        specialization: 'Orthopedic',
        date: 'Wed Nov 5 8.00-8.30',
        imageSource: require('../assets/images/Doc1-removebg-preview.png'),
        title: 'First Item',
    },
    {
        id: '2',
        doctorName: 'Dr.Hendry',
        specialization: 'Orthopedic',
        date: 'Thu Nov 6 8.00-8.30',
        imageSource: require('../assets/images/Doc2-removebg-preview.png'),
        title: 'Second Item',
    },
    {
        id: '3',
        doctorName: 'Dr.Abdul',
        specialization: 'Orthopedic',
        date: 'Thu Nov 6 8.00-8.30',
        imageSource: require('../assets/images/Doc2-removebg-preview.png'),
        title: 'Third Item',
    },
];

const FirstScreen = () => {

    const renderItem1 = ({ item }: any) => {
        return (
            <View style={styles.Card}>
                <View
                    style={{
                        borderLeftColor: '#33498f',
                        borderLeftWidth: 2,
                        justifyContent: 'center',
                        marginTop: 20,
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={{ marginLeft: 15, color: 'black' }}>Appointment Date</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 10 }}>
                                <AntDesign name="clockcircleo" size={22} color="black" />
                                <Text style={{ marginLeft: 15, color: 'black', fontWeight: '600' }}>{item.date}</Text>
                            </View>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5, marginLeft: 40, width: 280, marginTop: 10 }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20, top: -15 }}>
                            <MaterialIcons name="more-vert" size={24} color="black" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 5 }}>
                        <ImageBackground
                            source={item.imageSource}
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: 22,
                                marginTop: 10,
                                backgroundColor: '#c2c2c6'
                            }}
                            imageStyle={{ borderRadius: 22 }} >
                            <View
                                style={{
                                    backgroundColor: '#3bb64f',
                                    width: 22,
                                    height: 22,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: 17,
                                    left: 32,
                                }} >
                                <MaterialIcons name="video-call" size={16} color="white" />
                            </View>
                        </ImageBackground>
                        <View style={{ marginLeft: 20, marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.doctorName}</Text>
                            <Text style={{ color: 'black' }}>{item.specialization}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View >
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <ImageBackground source={require('../assets/images/task-4circle.png')} style={{ marginTop: -200, width: 420, height: 500, }}   >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 200 }}>
                    <View style={styles.Mancontainer}>
                        <Image source={require('../assets/images/man-removebg-preview.png')} style={styles.Man} />
                    </View>
                    <View style={{ position: 'absolute', top: 110, right: 30, backgroundColor: 'white', borderRadius: 50, padding: 8, width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderColor: 'black' }}>
                        <AntDesign name="bells" size={22} color="black" />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', marginTop: 40 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ marginTop: 100 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
                                Welcome!
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
                                Balaji Saravanan
                            </Text>
                            <Text style={{ marginTop: 10 }}>
                                How is it going today?
                            </Text>
                            <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#fcb708', padding: 8, borderRadius: 30, width: 100 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontSize: 12 }}>Urgent Care</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View >
                        <Image source={require('../assets/images/mandoctor.png')} style={styles.Man1} />
                    </View>
                </View>
            </ImageBackground>


            <View style={{
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                borderColor: 'black',
                borderWidth: 0.3,
                borderBottomWidth: 0,
                paddingHorizontal: 20,
                marginTop: 120
            }}>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 10 }}>
                    Our Services
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
                <View style={styles.iconOuterContainer}>
                    <View style={styles.iconInnerContainer}>
                        <AntDesign name="medicinebox" size={22} color="#8895c9" />
                    </View>
                    <Text style={styles.iconText}>Medicine</Text>
                </View>
                <View style={styles.iconOuterContainer}>
                    <View style={styles.iconInnerContainer}>
                        <Fontisto name="injection-syringe" size={22} color="#8895c9" />
                    </View>
                    <Text style={styles.iconText}>Injection</Text>
                </View>
                <View style={styles.iconOuterContainer}>
                    <View style={styles.iconInnerContainer}>
                        <FontAwesome name="ambulance" size={22} color="#8895c9" />
                    </View>
                    <Text style={styles.iconText}>Ambulance</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 20, justifyContent: 'space-between' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Appointment</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#647ccb', fontWeight: 'bold' }}>See all</Text>
                </TouchableOpacity>
            </View>

            <View >
                <FlatList
                    data={DATA}
                    renderItem={renderItem1}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

export default FirstScreen;
const styles = StyleSheet.create({

    Mancontainer: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Man: {
        width: 70,
        height: 70,
        borderRadius: 50,
        overflow: 'hidden',
        marginTop: 230,
        backgroundColor: '#e6dbca'
    },
    Man1: {
        width: 200,
        height: 280,
        top: 30
    },
    Urgent: {
        width: 100,
        height: 30,
        borderRadius: 30,
        backgroundColor: 'orange',
        textAlign: 'center',
        padding: 5,
        marginLeft: 20
    },
    iconOuterContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    iconInnerContainer: {
        borderRadius: 50,
        padding: 15,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: '#e0e1e9'
    },
    iconText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black'
    },
    Card: {
        width: '90%',
        height: 150,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
        marginRight: 5,
        elevation: 15,
    },
});