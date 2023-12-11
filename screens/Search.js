import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function SearchScreen({ navigation, title }) {
    return (
        <SafeAreaView>
            <View style={{
                position: 'absolute', top: 0,
                width: '94%',
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                marginTop: 40, marginHorizontal: 12,
                zIndex: 3,
            }}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Category')}
                >
                    <Ionicons
                        name="chevron-back"
                        color="#888"
                        size={30}
                    />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '80%',
                    padding: 6,
                    backgroundColor: '#ddd', borderRadius: 6,
                }}>
                    <Ionicons name='search' size={18} color='#666' style = {{
                        marginRight: 5,
                        opacity: 0.6
                    }} />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor='#888'
                        style={{
                            marginLeft: 4,
                            width: '90%',
                            fontSize: 15,
                            opacity: 0.8
                        }}
                    />
                </View>
                <TouchableOpacity>
                    <Ionicons
                        name="cart-outline"
                        color="#888"
                        size={26}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: 110, paddingHorizontal: 16,
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                }}>
                    <Text style={{
                        fontSize: 18, fontWeight: 'bold',
                    }}>
                        Recently Search
                    </Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 16, fontWeight: 'bold',
                            color: "rgba(255, 23, 23, 1)",
                        }}>
                            Clear
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 12,
                }}>
                    <View style={styler.itemSearch}>
                        <Text style={styler.textItemSearch}>
                            T-shirt Hype
                        </Text>
                        <TouchableOpacity>
                            {xicon}
                        </TouchableOpacity>
                    </View>
                    <View style={styler.itemSearch}>
                        <Text style={styler.textItemSearch}>
                            Váy kẻ Caro
                        </Text>
                        <TouchableOpacity>
                            {xicon}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SearchScreen;

const styler=StyleSheet.create({
    itemSearch: {
        flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 8,
    },
    textItemSearch: {
        fontSize: 16, color: '#888',
    },
})

const xicon = <Feather name="x" size={24} color="#666" />