import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import vgcService from '../../server/ventures';
import { useState } from 'react';
import { Button } from "react-native-elements";
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';


const CameraBox = () => {
    const [uri, setUri] = useState(null);
    const [base64, setBase64] = useState(null);

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
          alert('Permission to access camera is required!');
          return;
        }
        const result = await ImagePicker.launchCameraAsync();

        console.log(`result is ${result}`);
        
        if (result.canceled === false) {
            try {
                const uri = result.assets[0].uri;
                setUri(uri);
    
                const resizedImage = await ImageManipulator.manipulateAsync(
                    uri,
                    [{ resize: { width: 400 } }],
                    { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
                );
    
                const base64Image = await FileSystem.readAsStringAsync(resizedImage.uri, { encoding: FileSystem.EncodingType.Base64 });

                console.log(base64Image);
    
                setBase64(base64Image);
            } catch (error) {
                console.error('Error processing image:', error);
            }
        }
    }

    const handleUpload = async (base64) => {
        console.log(`passed uri: ${base64}`);
        
        try {
            vgcService
                .create(base64)
                .then(response => {
                    console.log('Image saved successfully to MongoDB');
                })
                .catch(error => {
                    console.log(error.response.data.error);
                })
        } catch (error) {
            console.error('Error saving image to MongoDB:', error);
        }
    };
      
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openCamera}>
                {base64 ? (
                    <Image source={{ uri: uri }} style={styles.image} />
                ) : (
                    <TouchableOpacity onPress={openCamera}>
                        <Image 
                            source={{uri: 'https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg'}}
                            style={styles.image} />
                        <Text>Attach Photo</Text>
                    </TouchableOpacity>
                )}
            </TouchableOpacity>
            <Button buttonStyle={styles.button}
                title="Post Your Venture"
                onPress={() => handleUpload(base64)}
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
        marginTop: 20,
    },
    image: {
      width: 100, 
      height: 100,
      marginTop: 80,
    },
    button: {
        marginTop: 40,
        borderRadius: 50,
        backgroundColor: '#5DB075',
        // fontFamily: "Inter", // get font later!!
        width: 250,
        fontWeight: 'bold',
    },
});

export default CameraBox;