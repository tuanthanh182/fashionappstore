import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';

export default function CategoryScreen({ navigation }) {
    return (
        <SafeAreaView style={{
            marginTop: 20,
        }}>
            <Header navigation={navigation} title='Woman' />
            <View style={{
                marginTop: 100,
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#444', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#444',
                    }}>
                        Outwear
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#111', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#111',
                    }}>
                        Shirt
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#111', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#111',
                    }}>
                        Skirt
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#111', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#111',
                    }}>
                        Jeans
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#111', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#111',
                    }}>
                        Pants
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#111', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#111',
                    }}>
                        Blazers
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#111', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#111',
                    }}>
                        Accessories
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#111', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#111',
                    }}>
                        Shoes
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#111', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#111',
                    }}>
                        Bra Underwear
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#111', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#111',
                    }}>
                        Socks
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 20, paddingVertical: 12,
                        borderBottomColor: '#111', borderBottomWidth: 0.5,
                    }}>
                    <Text style={{
                        fontSize: 18, color: '#111',
                    }}>
                        Sweatshirts
                    </Text>
                    <Ionicons name='chevron-forward' color='#666' size={24} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

