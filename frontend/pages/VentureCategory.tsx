import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from "react";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

import colors from '../assets/themes/Colors';
import appStyles from '../assets/themes/Styles';

import VentureCardMedium from "./components/VentureCardMedium"

const VentureCategoryPage = ({ route, navigation }) => {
    const { category, cards } = route.params;
    // const navigation = useNavigation();

    console.log(cards);
    // console.log('each thing:', cards.map(card => [card[0], card[1], card[2], card[3]]));

    const handleBack = () => {
        navigation.goBack()
        console.log('going back');
    }
    
    return (
        <View style={appStyles.container}>
            <TouchableOpacity style={appStyles.backButton} onPress={handleBack} >
                <Icon name="chevron-left" size={30} color={colors.accent} />
            </TouchableOpacity>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{category}</Text>
            </View>
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={cards}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <VentureCardMedium
                        title={item.title}
                        image={item.image}
                        points={item.points}
                        description={item.description}
                        navigation={navigation}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 50,
    },
    title: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    listContainer: {
        flexDirection: 'column',
        marginTop: 10,
        width: 400,
    },
});

export default VentureCategoryPage;