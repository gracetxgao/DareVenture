import { View, Text, StyleSheet } from "react-native";

const VenturePointsEarned = () => {
    return (
        <View style={styles.pointsLeft}>
            <Text style={styles.points}>50</Text>
            <Text style={styles.text}>venture points</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pointsLeft: {
        backgroundColor: '#fff',
        padding: 10,
        width:130,
        height:130,
        borderRadius: 65,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    points: {
        color: '#32A366',
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        color: '#32A366',
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

export default VenturePointsEarned