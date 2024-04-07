import { View, Text, StyleSheet } from "react-native";

const VenturePoints = () => {
    return (
        <View style={styles.pointsLeft}>
            <Text style={styles.number}>
                8260
                </Text>
            <Text style={styles.points}>Venture Points</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pointsLeft: {
        backgroundColor: '#32A366',
        padding: 0,
        borderRadius: 100,
        margin: 10,
        
        alignItems: 'center',

        shadowColor: "#000000",
        shadowOpacity: 0.4,
        shadowRadius: 3,
        shadowOffset: {
          height: 2,
          width: 2
        }
    },
    number: {
        fontSize: 30,
        color: "white",
        fontWeight: 'bold',
        //borderRadius: 100,
        marginTop: 20,
        marginLeft: 0,
        marginRight: 0,
        
        paddingTop: 20,
    },
    points: {
        fontSize: 10,
        marginBottom: 40,
        color: "white",
        fontWeight: 'bold',
    }
})

export default VenturePoints