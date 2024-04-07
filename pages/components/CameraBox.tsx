import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-elements';

const CameraBox = () => {

    const openCamera = async () => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
          alert('Permission to access camera is required!');
          return;
        }
        let pickerResult = await ImagePicker.launchCameraAsync();
        if (pickerResult.canceled === true) {
          return;
        }
    
        // Handle the image picked from the camera here
      };

      
    return (
        <View  style={styles.container}>
            <TouchableOpacity onPress={openCamera}>
                <Image 
                    source={{uri: 'https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg'}}
                    style={styles.image} />
                <Text>attach photo</Text>
            </TouchableOpacity>
            <Button buttonStyle={styles.button}
                title="post your venture"
                // onPress={() => }
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
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
    },
});

export default CameraBox