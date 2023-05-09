import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground, Modal, StatusBar, Platform, ScrollView } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DATA = [
    {
        id: 1,
        title: 'quidem molestiae enim',
        imageSource: require('../assets/images/Doc1-removebg-preview.png'),
    },
    {
        id: 2,
        title: 'sunt qui excepturi placeat culpa',
        imageSource: require('../assets/images/Doc1-removebg-preview.png'),
    },
    {
        id: 3,
        title: 'omnis laborum odio'
    },
    {
        id: 4,
        title: 'non esse culpa molestiae omnis sed optio'
    },
    {
        id: 5,
        title: 'eaque aut omnis a'
    },
    {
        id: 6,
        title: 'natus impedit quibusdam illo est'
    },
    {
        id: 7,
        title: 'quibusdam autem aliquid et et quia'
    },
    {
        id: 8,
        title: 'qui fuga est a eum'
    },
    {
        id: 9,
        title: 'saepe unde necessitatibus rem'
    },
    {
        id: 10,
        title: 'distinctio laborum qui'
    },
];

const CustomScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const [showModal, setShowModal] = useState<any>({ visible: false, modalData: '' })

    const handleTabPress = ({ index }: any) => {
        setSelectedIndex(index);
    };

    const hai = () => {
        return (
            <View >
                <FlatList
                    data={DATA}
                    renderItem={renderItem1}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
    const renderItem1 = ({ item }: any) => {
        return (
            <View style={styles.Card}>
                <View
                    style={{
                        borderLeftColor: '#87bf91',
                        borderLeftWidth: 2,
                        justifyContent: 'center',
                        marginTop: 20,
                    }}
                >
                    <TouchableOpacity onPress={() => setShowModal({ visible: true, modalData: item })}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ marginLeft: 15, color: 'black' }}>Appointment Date</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 10 }}>
                                    <AntDesign name="clockcircleo" size={22} color="black" />
                                    <Text style={{ marginLeft: 10, color: 'black' }}>{item.id}</Text>
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
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ color: 'black' }}>{item.imageSource}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    const modalView = () => {
        // {console.log(showModal,"****************************")}
        return (
            <View>
                <Modal visible={showModal?.visible} animationType="slide" transparent={true}>
                    <TouchableOpacity onPress={() => setShowModal({ visible: false, modalData: '' })}>
                        <ScrollView >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 320 }}>
                                <View style={{
                                    height: '110%',
                                    width: '100%',
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                    borderBottomWidth: 0,
                                    borderTopLeftRadius: 30,
                                    borderTopRightRadius: 30,
                                    borderWidth: 0.1
                                }}>
                                    <TouchableOpacity onPress={() => setShowModal({ visible: false, modalData: '' })}>
                                        <View style={{ borderBottomWidth: 2, borderBottomColor: 'black', marginTop: 20, width: 100, alignSelf: 'center' }} />
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 25, marginLeft: 150, fontWeight: 'bold', marginTop: 20, color: 'black' }}>Summary</Text>
                                        <TouchableOpacity onPress={() => setShowModal({ visible: false, modalData: '' })}>
                                            <Text style={{ fontSize: 20, marginTop: 20, marginRight: 30 }}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 5 }}>
                                        <ImageBackground
                                            source={require('../assets/images/Doc1-removebg-preview.png')}
                                            style={{
                                                width: 44,
                                                height: 44,
                                                borderRadius: 22,
                                                marginTop: 10,
                                                backgroundColor: '#c2c2c6'
                                            }}
                                            imageStyle={{ borderRadius: 22 }}
                                        >
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
                                                }}
                                            >
                                                <MaterialIcons name="video-call" size={16} color="white" />
                                            </View>
                                        </ImageBackground>
                                        <View style={{ marginLeft: 20, marginTop: 10 }}>
                                            <Text style={{ color: 'black', fontWeight: 'bold' }}>{showModal?.modalData?.doctorName}</Text>
                                            <Text style={{ color: 'black' }}>{showModal?.modalData?.specialization}</Text>
                                        </View>
                                    </View>

                                    <View style={{ marginLeft: 40, marginTop: 20, flexDirection: 'row' }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Patient Name:</Text>
                                        <Text style={{ color: 'black', marginLeft: 10 }}>{showModal?.modalData?.patientName}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginLeft: 40, marginTop: 20 }}>
                                        <View style={{ marginRight: 40, flexDirection: 'row' }}>
                                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Sex:</Text>
                                            <Text style={{ color: 'black', marginLeft: 10 }}>{showModal?.modalData?.sex}</Text>
                                        </View>
                                        <View style={{ marginRight: 40, flexDirection: 'row' }}>
                                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Age:</Text>
                                            <Text style={{ color: 'black', marginLeft: 10 }}>{showModal?.modalData?.Age}</Text>
                                        </View>
                                    </View>

                                    <View style={{ marginLeft: 50, }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>Doctor's Advice</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 50 }}>
                                        <AntDesign name="check" size={20} style={{ color: 'green' }} />
                                        <Text style={{ marginLeft: 10, color: 'black', fontWeight: '400' }}>{showModal?.modalData?.doctorAdvice}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 50 }}>
                                        <AntDesign name="check" size={20} style={{ color: 'green' }} />
                                        <Text style={{ marginLeft: 10, color: 'black', fontWeight: '400' }}>{showModal?.modalData?.doctorAdvice1}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 50 }}>
                                        <AntDesign name="check" size={20} style={{ color: 'green' }} />
                                        <Text style={{ marginLeft: 10, color: 'black', fontWeight: '400' }}>{showModal?.modalData?.doctorAdvice2}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 40 }} >
                                        <Text style={{ marginLeft: 15, color: 'black', fontWeight: 'bold' }}>Discharge Bill Pdf</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-evenly', }}>
                                        <AntDesign name="pdffile1" size={50} color="red" style={{ backgroundColor: '#eeeeee', padding: 10 }} />
                                        <AntDesign name="pdffile1" size={50} color="red" style={{ backgroundColor: '#eeeeee', padding: 10 }} />
                                    </View>

                                </View>
                            </View>
                        </ScrollView>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
    return (
        <View style={styles.Container}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>
                    Schedule
                </Text>
                <View style={{ elevation: 15, marginRight: 10, backgroundColor: '#e3e3e3', borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="bells" size={20} color="black" />
                </View>
            </View>
            
            <View style={styles.tabContainer1}>
                <TouchableOpacity
                    style={[
                        styles.tabStyle,
                        selectedIndex === 0 && styles.activeTabLeftRadius,
                        selectedIndex === 1 && styles.activeTabRightRadius,
                        selectedIndex === 0 && styles.activeTabStyle,
                    ]}
                    onPress={(index) => setSelectedIndex(0)}>
                    <Text
                        style={[
                            styles.tabTextStyle,
                            selectedIndex === 0 && styles.activeTabTextStyle,
                        ]} >
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tabStyle,
                        selectedIndex === 1 && styles.activeTabLeftRadius,
                        selectedIndex === 0 && styles.activeTabRightRadius,
                        selectedIndex === 1 && styles.activeTabStyle,
                    ]}
                    onPress={(index) => setSelectedIndex(1)} >
                    <Text
                        style={[
                            styles.tabTextStyle,
                            selectedIndex === 1 && styles.activeTabTextStyle,
                        ]} >
                        Past
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center'}}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>Welcome to my page </Text>
            </View>
            { hai()}
            {modalView()}
        </View>
    );
};

export default CustomScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
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
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    tabContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderColor: '#ececec',
        borderRadius: 20,
        height: 45,
        marginHorizontal: 40,
        borderWidth: 0.4,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#ececec'
    },
    tabStyle: {
        borderWidth: 0,
        borderEndWidth: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -10,
        marginLeft: -10,
        width: 150,
    },
    activeTabStyle: {
        backgroundColor: '#ffffff',
        elevation: 10,
    },
    activeTabLeftRadius: {
        borderRadius: 20
    },
    activeTabRightRadius: {
        borderRadius: 20
    },
    tabTextStyle: {
        color: 'black',
        fontWeight: 'bold',
    },
    activeTabTextStyle: {
        color: 'black',
        fontWeight: 'bold',
    },
});


