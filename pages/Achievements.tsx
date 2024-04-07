import { View, Text } from "react-native";
import VenturePoints from "./components/VenturePointsBubble";
import ProductCard from "./components/ProductCard";

const AchievementsScreen = () => {
    return (
        <View>
            <Text>congratulations</Text>
            <Text>you have earned</Text>
            <VenturePoints />
            <Text>you currently have 100 venture points</Text>
            <ProductCard title={"reward title"} redeemed={false}/>
        </View>
    )
}

export default AchievementsScreen