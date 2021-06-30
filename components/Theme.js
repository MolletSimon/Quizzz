import React from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';

const Theme = ({index}) => {
    return(
        <View style={styles.container}>
            {index % 2 == 0 ?  (
                <TouchableHighlight style={styles.themeEven} onPress={() => alert('coucou')}>
                    <>
                    <Image source={require('../assets/icons/icon.png')}></Image>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Arts</Text>
                    </View>
                    </>
                </TouchableHighlight>
            ) : (
                <View style={styles.themeOdd}>
                    <Image source={require('../assets/icons/geo.png')}></Image>
                    <View style={styles.textViewOdd}>
                        <Text style={styles.text}>Géo</Text>
                    </View>
                </View>
            ) }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 40,
        marginRight: 40
    },
    themeEven: {
        flexDirection: 'column',
        alignItems: "flex-start",
        marginTop: -50,
    },
    themeOdd: {
        flexDirection: 'column',
        alignItems: "flex-end",
        marginTop: -90
    },
    text: {
        color: "white",
        fontFamily: "Gilroy-ExtraBold",
        fontSize: 20,
        marginTop: 5
    },
    textView: {
        width: "60%",
        alignItems: "center",
    },
    textViewOdd: {
        width: "40%",
        alignItems: "center",
    }
})
export default Theme;