import { View, Text, StyleSheet } from "react-native";

const VenturePoints = () => {
    return (
        <View style={styles.pointsLeft}>
            <Text>number</Text>
            <Text>venture points</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pointsLeft: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 100,
        margin: 20,
    },
})

export default VenturePoints