import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    
    
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Header0 from '../components/Header0';
export default function PaymentCardScreen ({navigation}) {
    return (
        <View style= {{
            marginTop: 20
        }}>
            <Header0  back={()=>navigation.navigate('Checkout')} navigation={navigation} title='Payment Card' />
            <View style={{
                height:80,
            }}>
            </View>
            <View style={{
                borderBottomWidth:1,
                borderBottomColor:'#999'
            }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                }}>
                    <View style={{
                        flexDirection:'row',
                       
                    }}>
                        <View>
                        <Image source={require('../assets/img/payment1.jpg')} style={{
                            resizeMode:'contain',
                            width:50,
                            height:30,
                            marginHorizontal:20,
                            borderRadius:3,
                            marginVertical:10,
                        }}/>
                        </View>
                        <View style={{
                            marginTop:10,
                            
                        }}>
                            <Text style={{
                                fontSize:18,
                                fontWeight:700,
                                
                                
                            }}> 
                            Credit Card
                            </Text>
                        </View>

                    </View>
                    <TouchableOpacity>
                        <Ionicons
                            name = "chevron-forward"
                            color = "#c2c2c6"
                            size={30}
                            style={{
                                marginRight:22,
                                marginTop:10
                            }}
                        />
                       
                        </TouchableOpacity>

                </View>

            </View>
            <View style={{
                borderBottomWidth:1,
                borderBottomColor:'#999'
            }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                }}>
                    <View style={{
                        flexDirection:'row',
                       
                    }}>
                        <View>
                        <Image source={require('../assets/img/payment2.jpg')} style={{
                            resizeMode:'contain',
                            width:50,
                            height:30,
                            marginHorizontal:20,
                            borderRadius:3,
                            marginVertical:10,
                        }}/>
                        </View>
                        <View style={{
                            marginTop:10,
                            
                        }}>
                            <Text style={{
                                fontSize:18,
                                fontWeight:700,
                                
                                
                            }}> 
                            Paypal
                            </Text>
                        </View>

                    </View>
                    <TouchableOpacity>
                        <Ionicons
                            name = "chevron-forward"
                            color = "#c2c2c6"
                            size={30}
                            style={{
                                marginRight:22,
                                marginTop:10,
                            }}
                        />
                       
                        </TouchableOpacity>

                </View>

            </View>
            <View style={{
                borderBottomWidth:1,
                borderBottomColor:'#999'
            }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                }}>
                    <View style={{
                        flexDirection:'row',
                       
                    }}>
                        <View>
                        <Image source={require('../assets/img/payment3.jpg')} style={{
                            resizeMode:'contain',
                            width:50,
                            height:30,
                            marginHorizontal:20,
                            borderRadius:3,
                            marginVertical:10,
                        }}/>
                        </View>
                        <View style={{
                            marginTop:10,
                            
                        }}>
                            <Text style={{
                                fontSize:18,
                                fontWeight:700,
                                
                                
                            }}> 
                            Apple Pay
                            </Text>
                        </View>

                    </View>
                    <TouchableOpacity>
                        <Ionicons
                            name = "chevron-forward"
                            color = "#c2c2c6"
                            size={30}
                            style={{
                                marginRight:22,
                                marginTop:10,
                            }}
                        />
                        </TouchableOpacity>

                </View>


            </View>
            <View
                style={{
                    marginTop:450,

                }}
            >
                <TouchableOpacity
                    onPress={() => alert('Coming Soon')}
                    style={{
                        justifyContent: 'center',
                        marginTop: 12,
                        marginLeft:20,
                        width: "90%", height: 48,
                        backgroundColor: "#553239", borderRadius: 8,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#fff", fontSize: 18, fontWeight: 'bold',
                        }}
                    >
                       Add Card
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}