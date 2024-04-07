import VentureCard from "./VentureCard"
import { View, StyleSheet, ScrollView } from 'react-native';

interface VenturesBoxTypes {
    cards: Array<Array<String>>
}

const VenturesBox = ({ cards }: VenturesBoxTypes) => {
    const VentureCards = cards.map((card, index) => <VentureCard key={index} title={card[0]} image={card[1]} desc={card[2]}/>)

    return (
        <ScrollView horizontal={true} style={styles.container}>
            {VentureCards}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#fff',
    },

});

export default VenturesBox;