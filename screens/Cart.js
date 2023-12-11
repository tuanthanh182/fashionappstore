import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CartScreen({ navigation }) {
    const box = <FontAwesome5 name="square" size={25} color="#C9B686" />;
    const checkbox = <Ionicons name='checkbox-outline' size={22} color={'#C9B686'}/>;
    const [check, setCheck] = useState(0);
    const [checkItem1, setCheckItem1] = useState(0);
    const [checkItem2, setCheckItem2] = useState(0);
    useEffect(()=> {
        if (checkItem1 == 1 && checkItem2 == 1){
            setCheck(1);
        }
    });

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 16,
        }}>
            <View style={{
                flexDirection: 'row',
                marginTop: 50,
                justifyContent: 'space-between',
                width: '92%',
                marginLeft: 20
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 700,
                }}>
                    Cart
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Wishlist')}
                >
                    <Ionicons
                        name="heart"
                        color="tomato"
                        size={26}

                    />
                </TouchableOpacity>
            </View>
            <View style={{
                marginBottom: 20,
            }}></View>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 4,
                borderBottomColor: '#EFEFF0'

            }}>
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20
                }}>
                    <TouchableOpacity 
                        onPress = {() => {
                            if (check == 1){
                                setCheck(0);
                                setCheckItem1(0);
                                setCheckItem2(0);
                            } else {
                                setCheck(1);
                                setCheckItem1(1);
                                setCheckItem2(1);
                            }
                        }}
                        style={{
                            marginRight: 10,
                    }}>
                        {check === 1 ? checkbox : box} 
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                    }}>
                        Select All
                    </Text>
                </View>
                <TouchableOpacity style={{
                    marginRight: 20,
                    marginBottom: 20,
                }}>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'tomato',

                    }}>
                        Delete All
                    </Text>
                </TouchableOpacity>


            </View>
            {/* img */}
            <View style={{

                marginTop: 20,
                width: '90%'
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 22,

                }}>
                    <TouchableOpacity 
                        onPress = {()=> {
                            if (checkItem1 == 1){
                                setCheckItem1(0);
                                setCheck(0);
                            } else {
                                setCheckItem1(1);
                            }
                        }}
                    >
                        {checkItem1 === 1 ? checkbox : box}
                    </TouchableOpacity>
                    <Image source={require('../assets/img/shirtwomen6.jpg')} style={{
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
                            Áo sơ mi nữ dài tay form rộng ulzzang kiểu hàn basic
                        </Text>
                        <Text style={{
                            color: '#888',
                            height: 30,
                        }}>
                            Space Grey (36)
                        </Text>
                        <Text style={{
                            color: '#333',
                            fontSize: 19,

                        }}>
                            $ 420.000
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
                            marginLeft: 65,
                        }}>
                            Quantity :
                        </Text>
                        <Text style={{
                            fontSize: 19,
                            fontWeight: 700,
                        }}>1</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        height: 30,
                        backgroundColor: '#ddd',

                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginRight: -25,
                    }}>
                        <TouchableOpacity style={{
                            paddingHorizontal: 10,

                        }}>
                            <Text style={{
                                fontSize: 20,
                            }}>
                                --
                            </Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 20,
                            color: '#94949e'
                        }}> | </Text>
                        <TouchableOpacity style={{
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
            {/* img1 */}
            {/* img2 */}
            <View style={{


                width: '90%'
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 22,

                }}>
                    <TouchableOpacity 
                        onPress = {()=> {
                            if (checkItem2 == 1){
                                setCheckItem2(0);
                                setCheck(0);
                            } else {
                                setCheckItem2(1);
                            }
                        }}
                    >
                        {checkItem2 === 1 ? checkbox : box}
                    </TouchableOpacity>
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
                            Áo Ripped - Hopped Bean Bản Limited Edition
                        </Text>
                        <Text style={{
                            color: '#888',
                            height: 30,
                        }}>
                            Space Green (36)
                        </Text>
                        <Text style={{
                            color: '#333',
                            fontSize: 19,

                        }}>
                            $ 550.000
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
                            marginLeft: 65,
                        }}>
                            Quantity :
                        </Text>
                        <Text style={{
                            fontSize: 19,
                            fontWeight: 700,
                        }}>1</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        height: 30,
                        backgroundColor: '#c2c2c6',

                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginRight: -25,
                    }}>
                        <TouchableOpacity style={{
                            paddingHorizontal: 10,

                        }}>
                            <Text style={{
                                fontSize: 20,
                            }}>
                                --
                            </Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 20,
                            color: '#94949e'
                        }}> | </Text>
                        <TouchableOpacity style={{
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
            {/* img2 */}
            <View>

                <View style={{
                    marginTop: 150,
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

                            Total Price
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Checkout')}
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
                                Order Now (2)
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginLeft: 20,
                    }}>
                        <Text style={{
                            color: '#333',
                            fontSize: 22,
                            marginTop: -29,
                            fontWeight: 700,
                        }}>
                            $ 970.000
                        </Text>

                    </View>


                </View>
            </View>

        </View>
    );
}