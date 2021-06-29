import React from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

const Theme = ({index}) => {
    return(
        <View style={styles.container}>
            {index % 2 == 0 ?  (
                <View style={styles.themeEven}>
                    <Image source={require('../assets/icons/icon.png')}></Image>
                    <Text style={styles.text}>{index} Sciences</Text>
                </View>
            ) : (
                <View style={styles.themeOdd}>
                    <Image source={require('../assets/icons/icon.png')}></Image>
                    <Text style={styles.text}>{index} Sciences</Text>
                </View>
            ) }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    themeEven: {
        flexDirection: 'column',
        alignItems: "flex-start"
    },
    themeOdd: {
        flexDirection: 'column',
        alignItems: "flex-end"
    },
    text: {
        color: "white",
        fontFamily: "Gilroy-ExtraBold",

    }
})
export default Theme;