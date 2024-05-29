import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useState } from "react";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import colors from '../assets/themes/Colors';
import appStyles from '../assets/themes/Styles';

import VentureCardMedium from "./components/VentureCardMedium"

const hikingPhoto = "https://www.hellobc.com/content/uploads/2018/02/6-2756-1024x683.jpg";

const VentureCategoryPage = ({ route, navigation}) => {
    const { category, cards } = route.params;
    
    return (
        <View style={appStyles.container}>
            <Text>{category}</Text>
            <FlatList
                style={styles.container}
                data={cards}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <VentureCardMedium 
                        navigation={navigation}
                        title={item[0]} 
                        image={item[1]} 
                        points={item[2]} 
                        description={item[3]} 
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    title: {
        marginTop:50,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    
});

export default VentureCategoryPage;