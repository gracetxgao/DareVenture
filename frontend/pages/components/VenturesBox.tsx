import VentureCardSmall from "./VentureCardSmall"
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';

import colors from "../../assets/themes/Colors";
import appStyles from "../../assets/themes/Styles";

const hikingPhoto = "https://www.hellobc.com/content/uploads/2018/02/6-2756-1024x683.jpg";

const VenturesBox = ({ cards, category, navigation }) => {
    const VentureCards = cards.map((card, index) => <VentureCardSmall navigation={navigation} key={index} title={card[0]} image={card[1]} points={card[2]} description={card[3]}/>)

    const handleCardPress = () => {
      navigation.navigate('VentureCategory', { 
        category: category,
        cards: [
          ["Go on a Hike", hikingPhoto, "50", "go hike! hiking is fun!"], 
          ["Dance Away", hikingPhoto, "50", "go hike! hiking is fun!"], 
          ["Cloudgazing", hikingPhoto, "50", "go hike! hiking is fun!"]
        ]
      });
    };

    return (
        <View>
            <Button
                titleStyle={styles.title}
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                title={category}
                onPress={handleCardPress}
            />
            <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
                {VentureCards}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,
        color: colors.textPrimary,
    },
    buttonContainer: {
        // marginRight: 80,
        // alignSelf: 'flex-start',
        // marginTop: -25,
    },
    button: {
        backgroundColor: null,
    },
});

export default VenturesBox;