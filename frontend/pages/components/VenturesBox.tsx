import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';

import colors from "../../assets/themes/Colors";
import appStyles from "../../assets/themes/Styles";

import VentureCardSmall from "./VentureCardSmall"

const VenturesBox = ({ cards, category, navigation }) => {
    const VentureCards = cards.map((card, index) => 
        <VentureCardSmall 
            navigation={navigation} 
            key={index} 
            title={card.title} 
            image={card.image} 
            points={card.points} 
            description={card.description}
        />)

    const handleCardPress = () => {
      navigation.navigate('VentureCategory', { 
        category: category,
        cards: cards,
      });
    };

    return (
        <View>
            <Text style={styles.title} onPress={handleCardPress}>{category}</Text>
            <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
                {VentureCards}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,
        color: colors.textPrimary,
    },
});

export default VenturesBox;