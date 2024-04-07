import { View, Text, StyleSheet } from "react-native";
import ProductsBox from "./components/ProductsBox";
import VenturePoints from "./components/VenturePointsBubble";

const CurrentStreak = () => {
    return (
        <View style={styles.sideBox}>
            <Text>current streak</Text>
            <Text>15</Text>
            <Text>days</Text>
        </View>
    )
}

const VenturesCompleted = () => {
    return (
        <View style={styles.sideBox}>
            <Text>ventures completed</Text>
            <Text>63</Text>
            <Text>ventures</Text>
        </View>
    )
}

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>name</Text>
            <Text>username</Text>
            <View style={styles.points}>
                <View>
                    <VenturePoints />
                </View>
                <View style={styles.pointsRight}>
                    <CurrentStreak />
                    <VenturesCompleted />
                </View>
            </View>
            <View>
                <Text>your venture wishlist</Text>
                <ProductsBox cards={["first", "second", "third"]} redeemed={false}/>
            </View>
            <View>
                <Text>redeemed venture items</Text>
                <ProductsBox cards={["first", "second", "third"]} redeemed={true}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10
    },
    points: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        
    },
    pointsRight: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
    },
    sideBox: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'flex-end',
    },
});

export default ProfileScreen