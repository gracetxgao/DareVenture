import { View, Text, StyleSheet, ScrollView } from "react-native";
import VentureGalleryCard from "./components/VentureCardLarge";
import { useState, useEffect } from "react";
import vgcService from '../server/ventures'
import { Image, ImageSourcePropType, ImageResolvedAssetSource } from 'react-native';
import * as FileSystem from 'expo-file-system';


declare module 'react-native' {
  export function resolveAssetSource(source: ImageSourcePropType): ImageResolvedAssetSource;
}

const hikingPhoto = "https://i0.wp.com/besthikesbc.ca/wp-content/uploads/2020/11/DSC09465-1.jpg?fit=2048%2C974&ssl=1";

const VentureGallery = () => {
    const [ventures, setVentures] = useState([
        { title: "go on a hike", uri: hikingPhoto, date: "april 6, 2024" },
      ]);


    useEffect(() => {
        console.log('getting venture cards');
        vgcService
            .getAll()
            .then(response => {
                console.log('fulfilled');
                setVentures(prevVentures => [...prevVentures, ...response])
            })
    }, [])

    console.log(`number of ventures: ${ventures.length}`);
    
    const ventureGalleryCards = ventures.map((v, index) => {
        console.log(v.uri);
        
        var imageSource;
        if (v.uri) {
            if (v.uri.startsWith('http')) {
                imageSource = v.uri;
            } else {
                imageSource = `data:image/jpg;charset=utf-8;base64, ${v.uri}`;
            }
        }

        // console.log(imageSource);

        let title = v.title;
        let date = v.date;
        let user = 'grace'
    
        if (!title) {
            title = "Adventures!!";
        }
    
        if (!date) {
            date = "April 5, 2024";
        }
        
        return (
          <VentureGalleryCard
            key={index}
            title={title}
            image={imageSource}
            user={user}
            date={date}
          />
        );
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Venture Gallery</Text>
            <ScrollView horizontal={false} style={styles.container}>
                {ventureGalleryCards}
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    title: {
        marginTop:50,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    
});

export default VentureGallery;
