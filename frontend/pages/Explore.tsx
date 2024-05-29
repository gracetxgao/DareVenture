import { Text, View, StyleSheet, ScrollView } from 'react-native';
import VentureCardSmall from './components/VentureCardSmall';
import VentureCardMedium from './components/VentureCardMedium';
import VenturesBox from './components/VenturesBox';

import colors from '../assets/themes/Colors';
import appStyles from '../assets/themes/Styles';

const hikingPhoto = "https://www.hellobc.com/content/uploads/2018/02/6-2756-1024x683.jpg";

const ExploreScreen = ({ navigation }) => {
    return (
        <View style={appStyles.container}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Today's Venture</Text>
                    <VentureCardMedium navigation={navigation} title="go on a walk" points="50" image={hikingPhoto} description="here are some reasons why you should go on a walk! walking is so fun and it will make you happy!"/>
                <VenturesBox category="Popular Ventures" cards={[["Go on a Hike", hikingPhoto, "50"], ["Dance Away", hikingPhoto, "50"], ["Cloudgazing", hikingPhoto, "50"]]}/>
                <VenturesBox category="Popular Ventures" cards={[["Go on a Hike", hikingPhoto, "50"], ["Dance Away", hikingPhoto, "50"], ["Cloudgazing", hikingPhoto, "50"]]}/>
                <VenturesBox category="Popular Ventures" cards={[["Go on a Hike", hikingPhoto, "50"], ["Dance Away", hikingPhoto, "50"], ["Cloudgazing", hikingPhoto, "50"]]}/>
                <VenturesBox category="Popular Ventures" cards={[["Go on a Hike", hikingPhoto, "50"], ["Dance Away", hikingPhoto, "50"], ["Cloudgazing", hikingPhoto, "50"]]}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        // paddingBottom: 10,
        marginTop: 20,
        marginLeft: 15,
    }
});

export default ExploreScreen;