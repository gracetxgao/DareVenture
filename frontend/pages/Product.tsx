import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Entypo';

import CameraBox from "./components/CameraBox";
import colors from '../assets/themes/Colors';
import appStyles from '../assets/themes/Styles';

const ProductPage = ({ route, navigation }) => {
    const { item, brand, image, points, description, redeemed } = route.params;
    console.log(item, brand, points, description, redeemed);
    
    return (
        <View style={appStyles.container}>
            <TouchableOpacity style={appStyles.backButton} onPress={() => navigation.goBack()} >
                <Icon name="chevron-left" size={30} color={colors.accent} />
            </TouchableOpacity>
            <Text style={styles.title}>{item}</Text>
            <Text style={styles.brand}>{brand}</Text>
            <Text style={styles.points}>{points} pts</Text>
            <View style={styles.container}>
                <Image 
                    source={{uri: image}}
                    style={styles.image} 
                />
                <Text style={styles.text}>{description}</Text>
                <Button 
                    buttonStyle={appStyles.button}
                    titleStyle={appStyles.buttonTitle}
                    title="Redeem"
                    // onPress={() => handleUpload(base64)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 70
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 70,
    },
    brand: {
        fontSize: 16,
        // fontWeight: 'bold',
        marginTop: 10,
    },
    points: {
        fontSize: 14,
        color: colors.accent,
        marginTop: 10
    },
    image: {
        width: 350, 
        height: 350,
        marginTop: 20
    },
    text: {
        color: colors.textPrimary,
        fontSize: 14,
        width: 350, 
    },
});

export default ProductPage