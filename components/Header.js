import React from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions, TouchableHighlight
} from 'react-native';

const Header = () => {
    return(
    <View style={styles.container}>
        <Image source={require('../assets/images/kermit.jpeg')}
               style= {styles.circle}>
        </Image>
        <View style={styles.rankGroup}>
            <Text style={styles.rankText}>Classement</Text>
            <Text style={styles.rank}>108</Text>
        </View>
        <Image source={require('../assets/icons/coin.png')}
                style={styles.coin}>
        </Image>
        <View style={styles.coinGroup}>
            <Text style={styles.rankText}>Gold</Text>
            <Text style={styles.rank}>6,543</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 20,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 0.2,
    },
    rankText: {
        fontFamily: "Gilroy-ExtraBold",
        color: "white",
    },
    rank: {
        fontFamily: "Gilroy-ExtraBold",
        color: "white",
        fontSize: 30
    },
    rankGroup: {
        justifyContent: "center",
        flexDirection: "column"
    },
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: "cover"
    },
    coin: {
        marginLeft: 10
    },
    coinGroup: {
        flexDirection: "column",
        justifyContent: "center",
    }
})

export default Header;