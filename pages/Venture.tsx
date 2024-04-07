import { View, Text, Image, StyleSheet } from "react-native";
import CameraBox from "./components/CameraBox";

const VenturePage = () => {
    return (
        <View style={styles.container}>
            <Text>time to touch grass</Text>
            <Image 
                source={{uri: 'https://d131tjlifx1tzx.cloudfront.net/wp-content/uploads/2019/02/healthykids.jpg'}}
                style={styles.image} />
            <Text>Have you been sitting by the desk working all day? Take a short break away from your device by going outside to touch some grass! Whether you played some spike ball, went on a walk, or just enjoy some time lying on the grass field, take a picture and share with the DareVenture community.</Text>
            <CameraBox />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black'
    },
    image: {
      width: 400, 
      height: 400,
    },
});

export default VenturePage