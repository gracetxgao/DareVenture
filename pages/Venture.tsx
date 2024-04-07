import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import CameraBox from "./components/CameraBox";

const VenturePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Time to Touch Grass</Text>
            <Image 
                source={{uri: 'https://d131tjlifx1tzx.cloudfront.net/wp-content/uploads/2019/02/healthykids.jpg'}}
                style={styles.image} />
            <Text style={styles.text}>Have you been sitting by the desk all day? Take a short break away from your device by going outside to touch some grass! Whether you play some spike ball, go on a walk, or just enjoy some time lying on the grass, take a picture and share with the DareVenture community.</Text>
            <CameraBox />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop:50,
    },
    image: {
      width: 350, 
      height: 250,
      borderRadius: 20,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop:10,
    },
    text:{
        paddingTop: 20,
        color: '#AEAEAE',
        paddingBottom: 20,
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

export default VenturePage