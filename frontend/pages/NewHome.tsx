import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';

import colors from '../assets/themes/Colors';
import appStyles from '../assets/themes/Styles';

import VentureCardLarge from "./components/VentureCardLarge";

const hikingPhoto = "https://www.hellobc.com/content/uploads/2018/02/6-2756-1024x683.jpg";

const NewHomeScreen = ({ navigation }) => {
    const [ventures, setVentures] = useState([
        { title: "go on a hike", uri: hikingPhoto, user: "gracetxgao", date: "april 6 9:15 pm" },
        { title: "go on a hike", uri: hikingPhoto, user: "gracetxgao", date: "may 21, 11:43 am" },
        { title: "go on a hike", uri: hikingPhoto, user: "gracetxgao", date: "may 10, 12:01 pm" },
        { title: "go on a hike", uri: hikingPhoto, user: "gracetxgao", date: "april 23, 6:41 pm" },
    ]);
    
    return (
        <View style={appStyles.container}>
            <FlatList
                style={styles.container}
                data={ventures}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <VentureCardLarge
                        title={item.title}
                        image={hikingPhoto}
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
    title: {
        marginTop:50,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    
});

export default NewHomeScreen;