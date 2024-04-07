import { View, Text } from "react-native";
import VentureGalleryCard from "./components/VentureGalleryCard";
import { useState, useEffect } from "react";
import vgcService from '../server/ventures'

const hikingPhoto = "https://i0.wp.com/besthikesbc.ca/wp-content/uploads/2020/11/DSC09465-1.jpg?fit=2048%2C974&ssl=1";
const cloudgazingPhoto = "https://media.licdn.com/dms/image/C5612AQEfDr-8Du32pA/article-cover_image-shrink_600_2000/0/1520113797467?e=2147483647&v=beta&t=5SIGaLw_mcAeLpHbWX2AJ9ISI5G181WxTB9KRh3MqnM";

const VentureGallery = () => {
    const [ventures, setVentures] = useState([["go on a hike", hikingPhoto, "april 6, 2024"], ["cloudgazing", cloudgazingPhoto, "march 10, 2023"]]);
    
    const ventureGalleryCards = ventures.map((v, index) => (
        <VentureGalleryCard key={index} title={v[0]} image={v[1]} date={v[2]}/>
    ));

    useEffect(() => {
        console.log('effect');
        vgcService
            .getAll()
            .then(response => {
                console.log('fulfilled');
                setVentures(response)
            })
    }, [])
         
    return (
        <View>
            <Text>venture gallery</Text>
            {ventureGalleryCards}
        </View>
    );
}

export default VentureGallery;
