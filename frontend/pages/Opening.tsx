import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Image } from 'react-native';

import colors from '../assets/themes/Colors'
import appStyles from '../assets/themes/Styles'

const Logo = require('../assets/DareVentureLogo.png');

const OpeningScreen = ({ navigation }) => {
    return (
        <View style={appStyles.container}>
            <Image style={styles.logo} source={Logo} resizeMode="contain" />
            <Text style={styles.title}>DareVenture</Text>
            <Button 
                buttonStyle={appStyles.button}
                titleStyle={appStyles.buttonTitle}
                title="Get Started"
                onPress={() =>
                    navigation.navigate('Login')
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 200,
    },
    title: {
        fontSize: 36,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        // borderWidth: 2,
        // borderColor: '#000',
    },
});

export default OpeningScreen;