import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import vgcService from '../../server/ventures';
import { useState } from 'react';
import { Button } from "react-native-elements";
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

import colors from '../../assets/themes/Colors';
import appStyles from '../../assets/themes/Styles';

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

        // console.log(`result is ${result}`);
        
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

                // console.log(base64Image);
    
                setBase64(base64Image);
            } catch (error) {
                console.error('Error processing image:', error);
            }
        }
    }

    const handleUpload = async (base64) => {
        // console.log(`passed uri: ${base64}`);
        
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
            <View style={styles.cameraContainer}>
                <TouchableOpacity onPress={openCamera}>
                    {base64 ? (
                        <Image source={{ uri: uri }} style={styles.image} />
                    ) : (
                        <TouchableOpacity onPress={openCamera}>
                            <Image 
                                source={{uri: 'https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg'}}
                                style={styles.cameraImage} />
                            <Text style={styles.text}>Your Photo</Text>
                        </TouchableOpacity>
                    )}
                </TouchableOpacity>
            </View>
            <Button 
                buttonStyle={appStyles.button}
                titleStyle={appStyles.buttonTitle}
                title="Post"
                onPress={() => handleUpload(base64)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraContainer: {
        width: 350, 
        height: 200,
        borderRadius: 20,
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: colors.lightAccent,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 70, 
        height: 70,
    },
    cameraImage: {
        width: 70, 
        height: 70,
        alignSelf: 'center'
    },
    text: {
        fontSize: 12,
        alignSelf: 'center'
    },
});

export default CameraBox;