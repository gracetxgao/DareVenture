import VentureCard from "./VentureCard"
import { View, StyleSheet, ScrollView } from 'react-native';

interface VenturesBoxTypes {
    cards: Array<String>
}

const VenturesBox = ({ cards }: VenturesBoxTypes) => {
    const VentureCards = cards.map((card, index) => <VentureCard key={index} title={card}/>)

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
        borderColor: 'black',
    },
    image: {
        marginLeft: 10,
        marginTop: 10,
        width: 175, 
        height: 200,
        borderRadius: 20,
      },
});

export default VenturesBox;