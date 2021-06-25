import React from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Text
} from 'react-native';

const app = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/background.png')} style={styles.imageBackground}>
                <Text style={styles.text}>Salut Paupau !</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
    }
})

export default app;