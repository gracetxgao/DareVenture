import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

import colors from '../assets/themes/Colors';
import appStyles from '../assets/themes/Styles';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={appStyles.container}>
            <TouchableOpacity style={appStyles.backButton} onPress={() => navigation.goBack()} >
                <Icon name="chevron-left" size={30} color={colors.accent} />
            </TouchableOpacity>
            <Text style={styles.title}>Log In</Text>
            <Input inputContainerStyle={styles.inputComponent} inputStyle={styles.inputText} placeholder='username' />
            <Input inputContainerStyle={styles.inputComponent} inputStyle={styles.inputText} placeholder='password' />
            <Button
                titleStyle={styles.createButtonTitle}
                buttonStyle={styles.createButton}
                containerStyle={styles.createButtonContainer}
                title="Create An Account"
                onPress={() => navigation.navigate('Signup')}
            />
            <Button
                titleStyle={appStyles.buttonTitle}
                buttonStyle={appStyles.button}
                title="Log In"
                onPress={() => {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'MainTabs' }],
                        })
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        color: colors.accent,
        marginBottom: 75,
    },
    inputText: {
        backgroundColor: colors.lightAccent,
        paddingLeft: 20,
        borderRadius: 25,
    }, 
    inputComponent: {
        borderBottomWidth: 0,
        marginLeft: 70,
        marginRight: 70,
        alignSelf: 'center',
        // borderWidth: 2,
        // borderColor: '#000',
    },
    createButtonContainer: {
        marginRight: 80,
        alignSelf: 'flex-end',
        marginTop: -25,
    },
    createButtonTitle: {
        color: colors.textPrimary,
        fontSize: 14,
    },
    createButton: {
        backgroundColor: null,
        // borderWidth: 2,
        // borderColor: '#000',
    },
});

export default LoginScreen;
