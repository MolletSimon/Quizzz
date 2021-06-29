import React from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Text
} from 'react-native';
import Homescreen from './screens/homescreen';
import Header from './components/Header';

const app = () => {
    return(
        <ImageBackground source={require('./assets/images/background.png')} style={styles.imageBackground}>
            <Header></Header>
            <Homescreen></Homescreen>
        </ImageBackground>
        
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
        fontFamily: "Gilroy-ExtraBold"
    }
})

export default app;