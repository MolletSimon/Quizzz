import React from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Text
} from 'react-native';
import Theme from '../components/Theme';

const Homescreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headerTextGroup}>
                <Text style={styles.go}>C'est parti !</Text>
                <Text style={styles.chooseText}>Choisissez un thème pour commencer à jouer</Text>
            </View>
            <View style={styles.themes}>
                <Theme index="0"></Theme>
                <Theme index="1"></Theme>
                <Theme index="2"></Theme>
                <Theme index="3"></Theme>
                <Theme index="4"></Theme>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    go: { 
        fontSize: 42,
        fontFamily: "Gilroy-ExtraBold",
        color: "white"
    },
    chooseText: {
        fontFamily: "Gilroy-Light",
        color: "white",
        marginTop: 10
    },
    headerTextGroup: {
        marginLeft: 30,
        marginTop: 10
    },
    themes: {
        marginTop: 75
    }
})

export default Homescreen;