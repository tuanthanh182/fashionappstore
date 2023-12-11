import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Header0({back, navigation, title}) {
    return(
        <View style={{
            position: 'absolute', top: 0,
            width: '94%',
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
            marginTop: 24, marginHorizontal: 12,
            zIndex: 3,
        }}>
            <TouchableOpacity style={styler.button}
                onPress = {back}
            >
                <Ionicons
                    name = "chevron-back"
                    color = "#888"
                    size={32}
                />
            </TouchableOpacity>
            <Text style={{
                fontSize: 24, fontWeight: 'bold',
            }}>{title}</Text>
           <View style={{
            width:32,
           }}>

           </View>
        </View>
    );
}

export default Header0;

const styler = StyleSheet.create({
    button: {

    }
})