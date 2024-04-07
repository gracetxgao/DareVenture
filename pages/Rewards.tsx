import { View, Text } from "react-native";
import ProductsBox from "./components/ProductsBox";

const RewardsScreen = () => {
    return (
        <View>
            <Text>recommended</Text>
            <ProductsBox cards={["haha", "adfsdf", "afdsfasf"]} redeemed={false}/>
            <Text>wishlist</Text>
            <ProductsBox cards={["haha", "adfsdf", "afdsfasf"]} redeemed={false}/>
        </View>
    )
}

export default RewardsScreen