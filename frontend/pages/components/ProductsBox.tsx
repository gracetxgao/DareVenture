import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';

import colors from "../../assets/themes/Colors";
import appStyles from "../../assets/themes/Styles";

import VentureCardSmall from "./VentureCardSmall"
import ProductCardSmall from './ProductCardSmall';

const ProductsBox = ({ cards, navigation }) => {
    const ProductCards = cards.map((card, index) => 
        <ProductCardSmall 
            navigation={navigation} 
            key={index} 
            item={card.item} 
            brand={card.brand}
            image={card.image} 
            points={card.points} 
            description={card.description}
            redeemed={card.redeemed}
        />)

    return (
        <View>
            <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
                {ProductCards}
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
        color: colors.textPrimary,
    },
});

export default ProductsBox;