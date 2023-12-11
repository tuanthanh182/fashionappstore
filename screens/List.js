import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HeaderCart from '../components/HeaderCart';

export default function ListScreen({ navigation }) {
    return (
        <View style={{
            flex: 1,
            marginTop: 40, paddingLeft: 12,
        }}>
            <HeaderCart back={()=>navigation.navigate("Category")} navigation={navigation} title='Shirt' />
            <View style={{
                marginTop: 80,
            }}>
                <FlatList
                    horizontal
                    data={['Category', 'Color', 'Price', 'Brand']}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{
                            flexDirection: 'row', alignItems: 'center',
                            height: 36, paddingHorizontal: 12, marginHorizontal: 8,
                            borderWidth: 0.5, borderColor: '#aaa', borderRadius: 6,
                        }}>
                            <Text style={{
                                fontSize: 16, color: '#666'
                            }}>{item}</Text>
                            <Ionicons name='chevron-down' size={18} color='#888' style={{
                                paddingLeft: 4
                            }} />
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styler.newArrival}>
                <TouchableOpacity style={styler.titleArrival}
                    onPress={()=>navigation.navigate('NewArrival')}
                >
                    <Text style={{
                        fontSize: 18, fontWeight: 'bold', color: '#444',
                    }}>
                        New Arrival
                    </Text>
                    {forwardicon}
                </TouchableOpacity>
                <View style={styler.listArrival}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={[1, 1, 1]}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styler.itemArrival}>
                                <Image
                                    source={require('../assets/img/shirtwomen1.jpg')}
                                    style={styler.imageItemArrival}
                                />
                                <View style={styler.containerItemArrival}>
                                    <Text style={styler.titleItemArrival}>Váy Chữ A Thu Eo</Text>
                                    <Text style={styler.priceItemArrival}>
                                        $ 429.000
                                    </Text>
                                    <Text style={styler.rateItemArrival}>
                                        {staricon} 4.9   410 sold
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <View style={styler.newArrival}>
                <TouchableOpacity style={styler.titleArrival}
                    onPress={()=>navigation.navigate('BestSeller')}
                >
                    <Text style={{
                        fontSize: 18, fontWeight: 'bold', color: '#444',
                    }}>
                        Best Seller
                    </Text>
                    {forwardicon}
                </TouchableOpacity>
                <View style={styler.listArrival}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={[1, 1, 1]}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styler.itemArrival}>
                                <Image
                                    source={require('../assets/img/shirtwomen2.jpg')}
                                    style={styler.imageItemArrival}
                                />
                                <View style={styler.containerItemArrival}>
                                    <Text style={styler.titleItemArrival}>Váy Trắng Kiểu Pháp</Text>
                                    <Text style={styler.priceItemArrival}>
                                        $ 299.000
                                    </Text>
                                    <Text style={styler.rateItemArrival}>
                                        {staricon} 5.0   200 sold
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styler = StyleSheet.create({
    newArrival: {
        marginTop: 30, paddingHorizontal: 12,
        height: 280,
    },
    titleArrival: {
        flexDirection: 'row', justifyContent: 'space-between',
    },
    listArrival: {
        marginTop: 12,
        height: 270,
    },
    itemArrival: {
        marginRight: 24, paddingBottom: 10,
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
        fontSize: 14, fontWeight: 'bold',
    },
    rateItemArrival: {
        color: '#666',
        fontSize: 12
    },
})

const forwardicon = <Ionicons name='chevron-forward' size={24} color='#666' />
const biticon = <Ionicons name='logo-bitcoin' size={16} />
const staricon = <Ionicons name='star' color='rgba(255, 215, 0, 1)' />