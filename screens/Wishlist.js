import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,

} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function WishlistScreen({ navigation }) {
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                marginTop: 50,
                justifyContent: 'space-between',
                width: '92%',
                marginLeft: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 700,
                }}>
                    Wishlist
                </Text>
                <TouchableOpacity 
                    onPress = {() => navigation.navigate('Cart')}
                >
                    <Ionicons
                        name="cart-outline"
                        color="#888"
                        size={26}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                marginBottom: 20,
            }}>
            </View>
            <View>
                <View style={{


                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image source={require('../assets/img/shirtwomen6.jpg')} style={{
                            resizeMode: 'contain',
                            width: 100,
                            height: 100,
                            marginHorizontal: 20,
                            borderRadius: 10
                        }} />
                        <View style={{
                            width: '70%'
                        }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 600,
                                height: 46,
                            }}>
                                Áo sơ mi nữ dài tay form rộng ulzzang kiểu hàn basic
                            </Text>

                            <Text style={{
                                color: '#333',
                                fontSize: 16,
                                marginBottom: 10,

                            }}>
                                $ 400.000
                            </Text>
                            <View style={{
                                flexDirection: 'row',

                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    marginRight: 10
                                }}>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#999'
                                    }}>
                                        <Ionicons
                                            name='star'
                                            color={'orange'}
                                            size={12}
                                        /> 4.9
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#999'
                                    }}>
                                        400 Sold
                                    </Text>
                                </View>

                            </View>

                        </View>


                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 19,

                        borderBottomWidth: 2,
                        borderBottomColor: '#EFEFF0'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 30,


                        }}>
                            <TouchableOpacity>
                                <Ionicons name='trash'
                                    color="gray"
                                    size={26} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View>
                                <View >
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginBottom: 18,
                                    }}>

                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Cart')}
                                            style={{
                                                justifyContent: 'center',
                                                marginTop: -5,
                                                marginLeft: 36,
                                                width: "80%", height: 48,
                                                backgroundColor: "#1D3A3A", borderRadius: 8,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    color: "#fff", fontSize: 18, fontWeight: 'bold',
                                                }}
                                            >
                                                Add to cart
                                            </Text>
                                        </TouchableOpacity>
                                    </View>



                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
            <View style={{
                marginVertical: 15
            }}>

            </View>
            {/* img2 */}
            <View>
                <View style={{


                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image source={require('../assets/img/shirtwomen7.jpg')} style={{
                            resizeMode: 'contain',
                            width: 100,
                            height: 100,
                            marginHorizontal: 20,
                            borderRadius: 6

                        }} />
                        <View style={{
                            width: '70%'
                        }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 600,
                                height: 46,
                            }}>
                                Áo Ripped - Hopped Bean Bản giới hạn Edition
                            </Text>

                            <Text style={{
                                color: '#333',
                                fontSize: 16,
                                marginBottom: 10,

                            }}>
                                $ 500.000
                            </Text>
                            <View style={{
                                flexDirection: 'row',

                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    marginRight: 10
                                }}>
                                    <Ionicons
                                        name='star'
                                        color={'orange'}
                                        size={12}
                                    />
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#999'
                                    }}>
                                        4.9
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#999'
                                    }}>
                                        220 Sold
                                    </Text>
                                </View>

                            </View>

                        </View>


                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 19,

                        borderBottomWidth: 2,
                        borderBottomColor: '#EFEFF0'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 30,


                        }}>
                            <TouchableOpacity>
                                <Ionicons name='trash'
                                    color="#888"
                                    size={26} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View>

                                <View style={{




                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginBottom: 18,
                                    }}>

                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Cart')}
                                            style={{
                                                justifyContent: 'center',
                                                marginTop: -5,
                                                marginLeft: 36,
                                                width: "80%", height: 48,
                                                backgroundColor: "#1D3A3A", borderRadius: 8,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    color: "#fff", fontSize: 18, fontWeight: 'bold',
                                                }}
                                            >
                                                Add to cart
                                            </Text>
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