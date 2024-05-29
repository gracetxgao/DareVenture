import VentureCardSmall from "./VentureCardSmall"
import { View, StyleSheet, ScrollView, Text } from 'react-native';

interface VenturesBoxTypes {
    cards: Array<Array<String>>
    category: String
}

const VenturesBox = ({ cards, category }: VenturesBoxTypes) => {
    const VentureCards = cards.map((card, index) => <VentureCardSmall key={index} title={card[0]} image={card[1]} points={card[2]}/>)

    return (
        <View>
            <Text style={styles.title}>{category}</Text>
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
    }
});

export default VenturesBox;