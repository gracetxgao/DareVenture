import VentureCard from "./VentureCard"
import { View, StyleSheet} from 'react-native';

interface VenturesBoxTypes {
    cards: Array<String>
}

const VenturesBox = ({ cards }: VenturesBoxTypes) => {
    const VentureCards = [
        cards.map(card => <VentureCard key={cards.indexOf(card)}/>)
    ]

    return (
        <View>
            {VentureCards}
        </View>
    )
}

export default VenturesBox;