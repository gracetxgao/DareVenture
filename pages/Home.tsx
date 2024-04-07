import { Text, View, StyleSheet } from 'react-native';
import VentureCard from './components/VentureCard';
import MainVentureCard from './components/MainVentureCard';
import VenturesBox from './components/VenturesBox';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today's Venture</Text>
            <MainVentureCard navigation={navigation}/>
            <Text style={styles.title}>Popular Ventures</Text>
            <VenturesBox cards={["first", "second", "third"]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop:10,
    }
});

export default HomeScreen;