import ProductCard from './ProductCard';
import { View, StyleSheet, ScrollView } from 'react-native';

interface ProductsBoxTypes {
    cards: Array<String>
    redeemed: Boolean
}

const ProductsBox = ({ cards, redeemed }: ProductsBoxTypes) => {
    const ProductCards = cards.map((card, index) => <ProductCard key={index} title={card} redeemed={redeemed}/>)

    return (
        <ScrollView horizontal={true} style={styles.container}>
            {ProductCards}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //borderWidth: 1,
        //borderColor: 'black',
        shadowColor: "#000000",
        shadowOpacity: 0.17,
        shadowRadius: 3,
        shadowOffset: {
          height: 1,
          width: 1
        }
    },
});

export default ProductsBox;