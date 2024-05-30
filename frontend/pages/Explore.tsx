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
                <VentureCardMedium 
                    navigation={navigation} 
                    title="go on a walk" 
                    points="50" 
                    image="https://i.pinimg.com/564x/29/75/54/297554d602302bb0cc2c00c833287be8.jpg"
                    description="here are some reasons why you should go on a walk! walking is so fun and it will make you happy!"
                />
                <VenturesBox 
                    navigation={navigation} 
                    category="Popular Today" 
                    cards={[
                        { title: "go hiking!", image: "https://i.pinimg.com/564x/63/5b/c5/635bc5a97ca3abf51023e68c5d9e31be.jpg", points: '150', description: 'here are some reasons why you should go on a hike! hiking is so fun and it will make you happy! go on a hike' },
                        { title: "have a picnic", image: "https://i.pinimg.com/736x/cc/5c/14/cc5c14e06ca1c94ad76b9d96201d684c.jpg", points: '40', description: 'i love picnics!!!' },
                        { title: "run a 5k", image: "https://i.pinimg.com/736x/b2/fc/67/b2fc6732d049696ec639d143beca0015.jpg", points: '100', description: 'i love running!!!' },
                        { title: "lake day!", image: "https://i.pinimg.com/564x/42/64/9f/42649f806c05a9863697d324a8acdbe0.jpg", points: '50', description: 'i love lakes!!!' },
                    ]}
                />
                <VenturesBox 
                    navigation={navigation} 
                    category="Rainy Day Ventures" 
                    cards={[
                        { title: "go to the gym", image: "https://i.pinimg.com/564x/94/11/23/9411236234077bf60ea03ded8014841f.jpg", points: '20', description: 'i love gyms!!!'}, 
                        { title: "yoga class!", image: "https://i.pinimg.com/564x/ea/15/49/ea15490fb40b88d8002af259aafd34ec.jpg", points: '30', description: 'i love yoga!!!'}, 
                        { title: "go swimming", image: 'https://i.pinimg.com/564x/c3/b3/88/c3b388abdab31c72c36569096ee01804.jpg', points: '50', description: 'i love swimming!!!'}
                    ]}
                />
                <VenturesBox 
                    navigation={navigation} 
                    category="Venture with Friends" 
                    cards={[
                        { title: "play tennis!", image: "https://i.pinimg.com/564x/0c/fb/27/0cfb27e6a8fd26eff9ba23c08d85d5a1.jpg", points: '60', description: 'i love tennis!!!'}, 
                        { title: "beach day", image: "https://i.pinimg.com/564x/d6/6f/77/d66f77d5de5799cd69ee88e898e3c642.jpg", points: '10', description: 'i love beaches!!!'}, 
                        { title: "run club!", image: 'https://i.pinimg.com/564x/79/ca/08/79ca08f2abeabda3ce01fbe1e8427bbc.jpg', points: '80', description: 'i love running!!!'}
                    ]}
                />   
                {/* <VenturesBox navigation={navigation} category="Popular Ventures" cards={[["activity 1", hikingPhoto, "50", "i love hiking"], ["activity 1", hikingPhoto, "50", "i love hiking"], ["activity 1", hikingPhoto, "50", "i love hiking"]]}/>
                <VenturesBox navigation={navigation} category="Popular Ventures" cards={[["activity 1", hikingPhoto, "50", "i love hiking"], ["activity 1", hikingPhoto, "50", "i love hiking"], ["activity 1", hikingPhoto, "50", "i love hiking"]]}/> */}
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