import { Text, View, StyleSheet } from 'react-native';
import VentureCard from './components/VentureCard';
import MainVentureCard from './components/MainVentureCard';
import VenturesBox from './components/VenturesBox';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today's Venture</Text>
            <MainVentureCard />
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
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 20,
    }
});

export default HomeScreen;