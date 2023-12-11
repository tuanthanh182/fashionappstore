import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Header0 from '../components/Header0';

export default function CheckoutScreen({ navigation }) {
    const price = 500.000;
    const [total, setTotal] = useState(500.050);
    const [ quantity, setQuantity ] = useState(1);

    useEffect(() => {
        if (quantity != 0){
            setTotal(quantity*price+0.05);
        }
    });

    return (

        <View style={{
            marginTop: 20,
            flex: 1,
            paddingHorizontal: 16,


        }}>
            <Header0 navigation={navigation} title='Checkout' />
            <View style={{
                height: 80,
            }}>
            </View>
            {/* img */}
            <View style={{

                borderBottomWidth: 5,
                borderBottomColor: '#EFEFF0',
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image source={require('../assets/img/shirtwomen7.jpg')} style={{
                        resizeMode: 'contain',
                        width: 100,
                        height: 100,
                        marginHorizontal: 20,

                    }} />
                    <View style={{
                        width: '70%'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 600,
                            height: 46,
                        }}>
                            Ripped Jeans - Hopped Bean London Limited Edition
                        </Text>
                        <Text style={{
                            color: '#888',
                            height: 30,
                        }}>
                            White (36)
                        </Text>
                        <Text style={{
                            color: '#A07E28',
                            fontSize: 19,
                            fontWeight: 'bold'
                        }}>
                            $ {price.toFixed(3)}
                        </Text>
                    </View>

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 15,
                    marginBottom: 25,
                }}>
                    <View style={{
                        flexDirection: 'row',


                    }}>
                        <Text style={{
                            color: '#c2c2c1',
                            fontSize: 19,
                            marginLeft: 20,
                        }}>
                            Quantity :
                        </Text>
                        <Text style={{
                            fontSize: 19,
                            fontWeight: 700,
                        }}>{quantity}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        height: 30,
                        backgroundColor: '#ddd',

                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                        <TouchableOpacity 
                            onPress={()=>{
                                if (quantity==1)
                                    alert('Quantity cannot be less than 1');
                                else {
                                    setQuantity(quantity-1);
                                }
                            }}
                            style={{
                                paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: quantity === 1 ? "#666" : "#000",
                            }}>
                                --
                            </Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 20,
                            color: '#94949e'
                        }}> | </Text>
                        <TouchableOpacity 
                            onPress = {() => {
                                setQuantity(quantity+1);
                            }}
                            style={{
                                paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                fontSize: 20,
                            }}>
                                +
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            {/* img */}

            {/* info */}
            <View>
                <View style={{
                    marginTop: 20,
                    width: '100%',
                    height: 120,
                    borderBottomWidth: 5,
                    borderBottomColor: '#EFEFF0',


                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 12,
                    }}>
                        <Text style={{
                            marginLeft: 20,
                            fontSize: 18,
                            fontWeight: 700,
                        }}>

                            Shipping Address
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ShippingInfo')}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 700,
                            }}>
                                Edit
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginLeft: 20,


                    }}>

                        <Text>
                            Karim Sujatmiko (505) 555-0125
                        </Text>
                        <Text style={{
                            color: '#afb4bc'
                        }}>
                            2464 Royal Ln. Mesa, New Jersey
                        </Text>
                        <Text style={{
                            color: '#afb4bc',


                        }}>
                            2464
                        </Text>
                    </View>


                </View>

                <View style={{
                    marginTop: 20,
                    width: '100%',
                    height: 100,
                    borderBottomWidth: 5,
                    borderBottomColor: '#EFEFF0',


                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 12,
                    }}>
                        <Text style={{
                            marginLeft: 20,
                            fontSize: 18,
                            fontWeight: 700,
                        }}>

                            Delivery Service
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 700,
                        }}>
                            Edit
                        </Text>
                    </View>
                    <View style={{
                        marginLeft: 20,


                    }}>

                        <Text style={{
                            fontSize: 14,
                        }}>
                            FeedEx Reguler (3-4 days)
                        </Text>
                        <Text style={{
                            color: '#afb4bc',
                            fontSize: 14,
                            marginTop: 10,
                        }}>
                            $ 15,2
                        </Text>

                    </View>


                </View>

                <View>

                    <View style={{
                        marginTop: 20,
                        width: '100%',
                        height: 70,
                        borderBottomWidth: 5,
                        borderBottomColor: '#EFEFF0',


                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 12,
                        }}>
                            <Text style={{
                                marginLeft: 20,
                                fontSize: 18,
                                fontWeight: 700,
                            }}>

                                Payment Methods
                            </Text>
                            <TouchableOpacity 
                                onPress = {() => navigation.navigate('PaymentCard')}
                            >
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 700,
                                }}>
                                    Edit
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginLeft: 20,


                        }}>


                            <Text style={{
                                color: '#afb4bc',
                                fontSize: 15,
                                marginTop: -8,
                            }}>
                                E- Wallet
                            </Text>

                        </View>


                    </View>
                </View>
                <View style={{
                    marginTop: 5,
                    width: '100%',
                    height: 45,



                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 12,
                    }}>
                        <Text style={{
                            marginLeft: 20,
                            fontSize: 18,
                            fontWeight: 700,
                            marginTop: 5
                        }}>

                            Shipping Address
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ShippingInfo')}
                        >
                            <Ionicons
                                name="chevron-forward"
                                color="#c2c2c6"
                                size={36}
                            />

                        </TouchableOpacity>
                    </View>



                </View>

                <View>

                    <View style={{
                        marginTop: 1,
                        width: '100%',
                        height: 70,
                        borderTopWidth: 1,
                        borderTopColor: '#c2c2c6',



                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 12,
                        }}>
                            <Text style={{
                                marginLeft: 20,
                                fontSize: 14,
                                color: '#888',
                                marginTop: 20,

                            }}>

                                Payment Methods
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    alert("Successful Purchase");
                                    navigation.navigate('Home');
                                }}
                                style={{
                                    justifyContent: 'center',
                                    marginTop: 20,
                                    width: "40%", height: 48,
                                    backgroundColor: "#1D3A3A", borderRadius: 8,
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        color: "#fff", fontSize: 18, fontWeight: 'bold',
                                    }}
                                >
                                    Check Out Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginLeft: 20,


                        }}>


                            <Text style={{
                                color: '#A07E28',
                                fontSize: 22,
                                marginTop: -29,
                                fontWeight: 700,
                            }}>
                                $ {total}
                            </Text>

                        </View>


                    </View>
                </View>
            </View>
        </View>

    );
}
