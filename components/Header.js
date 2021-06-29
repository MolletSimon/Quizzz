import React from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Text
} from 'react-native';

const Header = () => {
    return(
    <View style={styles.container}>
        <circle></circle>
        <Text style={styles.text}>Bonjour</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 20,
        padding: 20,
        alignItems: "center",
        borderRadius: 50,
        borderColor: "black",
        borderWidth: 0.2,
    },
    text: {
        fontFamily: "Gilroy-Light",
        color: "white"
    }
})

export default Header;