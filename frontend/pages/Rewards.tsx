import { View, Text, StyleSheet } from "react-native";
import ProductsBox from "./components/ProductsBox";

const RewardsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>recommended</Text>
            <ProductsBox cards={["haha", "adfsdf", "afdsfasf"]} redeemed={false}/>
            <Text>wishlist</Text>
            <ProductsBox cards={["haha", "adfsdf", "afdsfasf"]} redeemed={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
    },
});
export default RewardsScreen