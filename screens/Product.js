import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList,
    StyleSheet,

} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';

const images = [
    {
        id: 1,
        image: require('../assets/img/shirtwomen5.jpg'),
    },
    {
        id: 2,
        image: require('../assets/img/shirtwomen8.jpg'),
    },
    {
        id: 3,
        image: require('../assets/img/shirtwomen9.jpg'),
    },
    {
        id: 4,
        image: require('../assets/img/shirtwomen10.jpg'),
    },
]

export default function ProductScreen({ navigation }) {

    const [color, setColor] = useState('');
    const [size, setSize] = useState('');


    const _renderItem = ({ item }) => {
        return (
            <Image
                source={item.image}
                style={{
                    resizeMode: 'cover', width: '100%', height: 400,
                }}
            />
        );
    }
    return (
        <ScrollView>
            <View style={{
                width: '94%',
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                marginTop: 40, marginHorizontal: 12,
                zIndex: 3,
            }}>
                <TouchableOpacity>
                    <Ionicons
                        name="chevron-back"
                        color="#888"
                        size={30}
                    />
                </TouchableOpacity>
                <TextInput placeholder='Search' style={{
                    paddingHorizontal: 12, paddingVertical: 8,
                    width: 300,
                    backgroundColor: '#ddd', color: '#222',
                    borderRadius: 4,
                }} />
                <TouchableOpacity>
                    <Ionicons
                        name="cart-outline"
                        color="#888"
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name="share-social-outline"
                        color='#888'
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: 24,
            }}>
                <AppIntroSlider
                    data={images}
                    renderItem={_renderItem}
                    showNextButton={false}
                    showDoneButton={false}
                />
            </View>
            <View style={{
                marginTop: 12, paddingHorizontal: 20, marginBottom: 12,
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                }}>
                    <View>
                        <Text style={{
                            fontSize: 18, fontWeight: 'bold',
                            color: '#444',
                        }}>
                            Đầm Body Nữ Dáng Dài Đuôi Cá Len
                        </Text>
                        <Text>
                            New Arrivial
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={28} />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    marginTop: 4,
                    fontSize: 24, fontWeight: 'bold',
                    color: 'rgba(160, 120, 36, 1)',
                }}>$ 400.000</Text>
                <View>
                    <Text style={{
                        marginTop: 4,
                        color: '#666',
                    }}>
                        <Ionicons name='star' color="rgba(248, 190, 27, 1)" /> 4.6  540 Sold
                    </Text>
                </View>
            </View>
            <View style={{
                paddingHorizontal: 20, marginTop: 12, paddingVertical: 20,
                borderTopWidth: 6, borderBottomWidth: 6, borderColor: "#ccc",
            }}>
                <Text style={{
                    fontSize: 16, fontWeight: 'bold',
                }}>
                    Description Product
                </Text>
                <Text style={{
                    marginTop: 4,
                    color: "#666",
                }}>
                    Đầm body nữ dáng dài đuôi cá len tăm là một sản phẩm thời trang nữ vô cùng quyến rũ và sang trọng. Đầm được làm từ chất liệu len tăm dày dặn, co giãn tốt, mang lại cảm giác thoải mái khi mặc. Đầm có thiết kế đơn giản nhưng tinh tế, tôn lên đường cong quyến rũ của người mặc.
                    Đầm body nữ dáng dài đuôi cá len tăm phù hợp với nhiều dịp, từ đi dự tiệc, đi chơi, đến đi làm. Đầm giúp phái đẹp tự tin và tỏa sáng mọi lúc mọi nơi.
                </Text>
            </View>
            <View style={{
                paddingHorizontal: 20, paddingVertical: 20,
                borderBottomWidth: 6, borderColor: "#ccc",
            }}>
                <Text style={{
                    marginBottom: 12,
                    fontSize: 16, fontWeight: 'bold',
                }}>
                    Variant Color
                </Text>
                <FlatList
                    horizontal
                    data = {['White', 'Gray', 'Black']}
                    renderItem = {({ item })=> (
                        <TouchableOpacity
                            onPress = {() => setColor(item)}
                            style={styler.btnColor(color, item)}    
                        >
                            <Text style={styler.textColor(color, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
                <Text style={{
                    marginVertical: 12,
                    fontSize: 16, fontWeight: 'bold',
                }}>
                    Size
                </Text>
                <FlatList 
                    horizontal
                    data = {[36,37,38,39,40,41]}
                    renderItem = {({ item })=>(
                        <TouchableOpacity
                            onPress = {()=>setSize(item)}
                            style={styler.btnSize(size, item)}
                        >
                            <Text style = {styler.textSize(size, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={{
                paddingHorizontal: 20, marginTop: 0, paddingVertical: 20,
                // borderTopWidth: 6, borderBottomWidth: 6, borderColor: "#ccc",
            }}>
                <Text style={{
                    marginBottom: 20,
                    fontSize: 18, fontWeight: 'bold',
                }}>
                    Similar Product
                </Text>
                <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={[1, 1, 1]}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styler.itemArrival}>
                                <Image
                                    source={require('../assets/img/shirtwomen3.jpg')}
                                    style={styler.imageItemArrival}
                                />
                                <View style={styler.containerItemArrival}>
                                    <Text style={styler.titleItemArrival}>ZARA Hadid Tracksuit</Text>
                                    <Text style={styler.priceItemArrival}>
                                        $ 500.000
                                    </Text>
                                    <Text style={styler.rateItemArrival}>
                                        {staricon} 4.9   400 sold
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
            </View>
            <View style={{
                paddingHorizontal: 20, marginVertical: 6, paddingVertical: 20,
                flexDirection: 'row', justifyContent: 'space-around',
            }}>
                <TouchableOpacity style={styler.btnTool}>
                    <Ionicons name ="chatbox-outline" size={28} color='rgba(160, 120, 36, 1)'/>
                </TouchableOpacity>
                <TouchableOpacity style={styler.btnTool}
                    onPress = {()=>navigation.navigate('Cart')}
                >
                    <Ionicons name ="cart-outline" size={28} color='rgba(160, 120, 36, 1)'/>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    justifyContent: 'center', alignItems: 'center',
                    width: 250,
                    backgroundColor: 'rgba(55, 82, 70, 1)',
                    borderRadius: 12,
                }}
                    onPress = {()=>navigation.navigate("Checkout")}
                >
                    <Text style={{
                        color: '#eee', fontWeight: 'bold', fontSize: 20,
                    }}>
                        Order Now
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styler = StyleSheet.create({
    btnColor: (color, item) => ({
        paddingHorizontal: 10, paddingVertical: 6, marginRight: 6,
        borderRadius: 4, borderWidth: 1.6, 
        borderColor: color === item ? "rgba(160, 120, 36, 1)" : "#ddd",
    }),
    textColor: (color, item) => ({
        fontSize: 14, fontWeight: 'bold',
        color: color === item ? "rgba(160, 120, 36, 1)" : "#666",
    }),
    btnSize: (size, item) => ({
        paddingHorizontal: 10, paddingVertical: 6, marginRight: 6,
        borderRadius: 4, borderWidth: 1.6, 
        borderColor: size === item ? "rgba(160, 120, 36, 1)" : "#ddd",
    }),
    textSize: (size, item) => ({
        fontSize: 14, fontWeight: 'bold',
        color: size === item ? "rgba(160, 120, 36, 1)" : "#666",
    }),
    itemArrival: {
        marginRight: 24, paddingBottom: 6,
        width: 180, height: 256,
        borderRadius: 6,
        overflow: 'hidden',
        shadowColor: "#888",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22, shadowRadius: 2.22,
        elevation: 1,
    },
    imageItemArrival: {
        resizeMode: 'cover', width: 180, height: 180,
    },
    containerItemArrival: {
        marginTop: 6, paddingLeft: 6,
    },
    titleItemArrival: {
        fontWeight: 'bold', color: '#222',
    },
    priceItemArrival: {
        alignItems: 'center',
        marginVertical: 4,
        fontSize: 16, fontWeight: 'bold',
    },
    rateItemArrival: {
        color: '#666',
    },
    btnTool: {
        padding: 8,
        borderWidth: 1, borderColor: 'rgba(160, 120, 36, 1)', borderRadius: 8,      
    },
})

const staricon = <Ionicons name='star' color='rgba(255, 215, 0, 1)' />