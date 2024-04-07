import { View, Text } from "react-native";
import VentureGalleryCard from "./components/VentureGalleryCard";
import { useState, useEffect } from "react";
import vgcService from '../server/ventures'
import { Image, ImageSourcePropType, ImageResolvedAssetSource } from 'react-native';

declare module 'react-native' {
  export function resolveAssetSource(source: ImageSourcePropType): ImageResolvedAssetSource;
}

const hikingPhoto = "https://i0.wp.com/besthikesbc.ca/wp-content/uploads/2020/11/DSC09465-1.jpg?fit=2048%2C974&ssl=1";

const VentureGallery = () => {
    const [ventures, setVentures] = useState([
        { title: "go on a hike", image: hikingPhoto, date: "april 6, 2024" },
      ]);


    useEffect(() => {
        console.log('getting venture cards');
        vgcService
            .getAll()
            .then(response => {
                console.log('fulfilled');
                setVentures(response)
            })
    }, [])

    console.log(`number of ventures: ${ventures.length}`);
    
    const ventureGalleryCards = ventures.map((v, index) => {
        let imageSource;
        if (v.image) {
            if (v.image.startsWith('http') === true) {
                imageSource = v.image;
            } else {
                imageSource = `data:image/jpg;base64,${v.image}`
            }
        }
        
        return (
          <VentureGalleryCard
            key={index}
            title={v.title}
            image={v.image}
            date={v.date}
          />
        );
    });

    return (
        <View>
            <Text>venture gallery</Text>
            {ventureGalleryCards}
        </View>
    );
}

export default VentureGallery;
