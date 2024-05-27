import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useState } from "react";

import colors from '../assets/themes/Colors';
import appStyles from '../assets/themes/Styles';

import VentureGalleryCard from "./components/VentureGalleryCard";

const hikingPhoto = "https://i0.wp.com/besthikesbc.ca/wp-content/uploads/2020/11/DSC09465-1.jpg?fit=2048%2C974&ssl=1";

const NewHomeScreen = ({ navigation }) => {
    const [ventures, setVentures] = useState([
        { title: "go on a hike", uri: hikingPhoto, date: "april 6, 2024" },
        { title: "go on a hike", uri: hikingPhoto, date: "april 6, 2024" },
        { title: "go on a hike", uri: hikingPhoto, date: "april 6, 2024" },
        { title: "go on a hike", uri: hikingPhoto, date: "april 6, 2024" },
    ]);
    
    const ventureGalleryCards = ventures.map((v, index) => {
        let title = v.title;
        let date = v.date;
        let imageSource = v.uri
        
        return (
            <VentureGalleryCard
                key={index}
                title={title}
                image={imageSource}
                date={date}
            />
        );
    });

    return (
        <View style={styles.container}>
            <ScrollView horizontal={false} style={styles.container}>
                {ventureGalleryCards}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        marginTop:50,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    
});

export default NewHomeScreen;