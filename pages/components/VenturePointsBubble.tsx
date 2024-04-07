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
        padding: 10,
        borderRadius: 100,
        margin: 15,
        //marginTop: 10,
        
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
        fontSize: 35,
        color: "white",
        fontWeight: 'bold',
        //borderRadius: 100,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,

        paddingTop: 5,
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

export default VenturePoints