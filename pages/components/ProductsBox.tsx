import ProductCard from './ProductCard';
import { View, StyleSheet, ScrollView } from 'react-native';

interface ProductsBoxTypes {
    cards: Array<String>
}

const ProductsBox = ({ cards }: ProductsBoxTypes) => {
    const ProductCards = cards.map((card, index) => <ProductCard key={index} title={card}/>)

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