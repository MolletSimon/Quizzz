import React from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

const Theme = () => {
    return(
        <View style={styles.theme}>
            <Image source={require('../assets/icons/icon.png')}></Image>
            <Text style={styles.text}>Sciences</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    theme: {
        flexDirection: 'column',
        marginTop: 20,
        alignItems: "center"
    },
    text: {
        color: "white",
        fontFamily: "Gilroy-ExtraBold",

    }
})
export default Theme;