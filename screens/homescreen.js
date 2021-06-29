import React from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Text
} from 'react-native';

const Homescreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Maxi QUIZ !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Gilroy-ExtraBold"
    }
})

export default Homescreen;