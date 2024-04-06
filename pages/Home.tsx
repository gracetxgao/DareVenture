import { Text, View } from 'react-native';
import VentureCard from './components/VentureCard';

const HomeScreen = () => {
    return (
        <View>
            <Text>today's venture</Text>
            <Text>popular venture</Text>
            <VentureCard/>
        </View>
    )
}

export default HomeScreen;