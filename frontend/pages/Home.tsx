import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';

import colors from '../assets/themes/Colors';
import appStyles from '../assets/themes/Styles';

import VentureCardLarge from "./components/VentureCardLarge";

const hikingPhoto = "https://www.hellobc.com/content/uploads/2018/02/6-2756-1024x683.jpg";

const HomeScreen = ({ navigation }) => {
    const [ventures, setVentures] = useState([
        { title: "go hiking!", image: "https://i.pinimg.com/564x/63/5b/c5/635bc5a97ca3abf51023e68c5d9e31be.jpg", points: '150', description: 'here are some reasons why you should go on a hike! hiking is so fun and it will make you happy! go on a hike', user: "gracetxgao", date: "april 6 9:15 pm" },
        { title: "have a picnic", image: "https://i.pinimg.com/736x/cc/5c/14/cc5c14e06ca1c94ad76b9d96201d684c.jpg", points: '40', description: 'i love picnics!!!', user: "gracetxgao", date: "april 6 9:15 pm" },
        { title: "run a 5k", image: "https://i.pinimg.com/736x/b2/fc/67/b2fc6732d049696ec639d143beca0015.jpg", points: '100', description: 'i love running!!!', user: "gracetxgao", date: "april 6 9:15 pm" },
        { title: "lake day!", image: "https://i.pinimg.com/564x/42/64/9f/42649f806c05a9863697d324a8acdbe0.jpg", points: '50', description: 'i love lakes!!!', user: "gracetxgao", date: "april 6 9:15 pm" },
    ]);
    
    return (
        <View style={appStyles.container}>
            <FlatList
                style={styles.container}
                data={ventures}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <VentureCardLarge
                        navigation={navigation}
                        title={item.title}
                        image={item.image}
                        points={item.points}
                        description={item.description}
                        user={item.user}
                        date={item.date}
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
});

export default HomeScreen;