import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Header0 from '../components/Header0';

export default function ShippingInfoScreen ({navigation}) {
    return (
        <View style={{
            marginTop:20,
            flex:1,
            paddingHorizontal:16 ,
        }}>
           <Header0 back={()=>navigation.navigate('Checkout')} navigation={navigation} title='Shipping Infomation' />
           <View style={{
                height:80,
            }}></View>
            <View style={{
                marginLeft:12,
            }}>
                <Text style={{
                    fontSize:22,
                    fontWeight:'bold',
                }}>
                Personal Information
                </Text>
            </View>
            {/* text */}
            <View
                style={{
                    marginTop: 20,
                }}
            >
                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#aaa"
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        marginVertical: 10,
                        width: "100%",
                        height:40,
                        borderColor: "#999",
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        marginVertical: 10,
                        width: "100%",
                        height:40,
                        borderColor: "#999",
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                >
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#aaa"
                    />
                   
                </View>

                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor="#aaa"
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        marginVertical: 10,
                        width: "100%",
                        height:40,
                        borderColor: "#999",
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        marginVertical: 10,
                        width: "100%",
                        height:40,
                        borderColor: "#999",
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                >
                    <TextInput
                        placeholder="Full Address"
                        placeholderTextColor="#aaa"
                    />
                   
                </View>

                <TextInput
                    placeholder="City"
                    placeholderTextColor="#aaa"
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        marginVertical: 10,
                        width: "100%",
                        height:40,
                        borderColor: "#999",
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        marginVertical: 10,
                        width: "100%",
                        height:40,
                        borderColor: "#999",
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                >
                    <TextInput
                        placeholder="State"
                        placeholderTextColor="#aaa"
                    />
                   
                </View>

                <TextInput
                    placeholder="Zip Code"
                    placeholderTextColor="#aaa"
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        marginVertical: 10,
                        width: "100%",
                        height:40,
                        borderColor: "#999",
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        marginVertical: 10,
                        width: "100%",
                        height:40,
                        borderColor: "#999",
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                >
                    <TextInput
                        placeholder="Notes "
                        placeholderTextColor="#aaa"
                    />
                   
                </View>
               
            </View>
            <View
                style={{
                    marginTop:50,

                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate()}
                    style={{
                        justifyContent: 'center',
                        marginTop: 12,
                        width: "100%", height: 48,
                        backgroundColor: "#553239", borderRadius: 8,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#fff", fontSize: 18, fontWeight: 'bold',
                        }}
                    >
                       Save Address
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}