import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import vgcService from '../../server/ventures';
import { useState } from 'react';
import { Button } from "react-native-elements";

const CameraBox = () => {

    const [imageUri, setImageUri] = useState(null);

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
          alert('Permission to access camera is required!');
          return;
        }
        const result = await ImagePicker.launchCameraAsync();

        console.log(`result is ${result}`);
        
        if (result.canceled === false) {
            console.log(result.assets[0].uri);
            setImageUri(result.assets[0].uri);
        }
    }

    const handleUpload = async (imageUri) => {
        try {
            vgcService
                .create(imageUri)
            console.log('Image saved successfully to MongoDB');
        } catch (error) {
            console.error('Error saving image to MongoDB:', error);
        }
    };
      
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openCamera}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                    <TouchableOpacity onPress={openCamera}>
                        <Image 
                            source={{uri: 'https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg'}}
                            style={styles.image} />
                        <Text>attach photo</Text>
                    </TouchableOpacity>
                )}
            </TouchableOpacity>
            <Button buttonStyle={styles.button}
                title="Post Your Venture"
                onPress={handleUpload}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350, 
        height: 150,
        borderRadius: 20,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
      width: 100, 
      height: 100,
    },
    button: {
        margin: 20,
        borderRadius: 50,
        backgroundColor: '#5DB075',
        fontFamily: "Inter", // get font later!!
        width: 250,
        fontWeight: 'bold',
    },
});

export default CameraBox;