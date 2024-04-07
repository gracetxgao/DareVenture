import ProductCard from './ProductCard';
import { View, StyleSheet, ScrollView } from 'react-native';

interface ProductsBoxTypes {
    cards: Array<Array<String>>
    redeemed: Boolean
}

const ProductsBox = ({ cards, redeemed }: ProductsBoxTypes) => {
    const ProductCards = cards.map((card, index) => <ProductCard key={index} title={card[0]} redeemed={redeemed} image={card[1]} company= {card[2]} desc= {card[3]}/>)

    return (
        <ScrollView horizontal={true} style={styles.container}>
            {ProductCards}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default ProductsBox;