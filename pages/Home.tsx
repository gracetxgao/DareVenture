import { Text, View, StyleSheet } from 'react-native';
import VentureCard from './components/VentureCard';
import MainVentureCard from './components/MainVentureCard';
import VenturesBox from './components/VenturesBox';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>today's venture</Text>
            <MainVentureCard />
            <Text>popular venture</Text>
            <VenturesBox cards={["first", "second", "third"]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },
});

export default HomeScreen;