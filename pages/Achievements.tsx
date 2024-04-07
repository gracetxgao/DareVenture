import { View, Text, StyleSheet } from "react-native";
import VenturePointsEarned from "./components/VenturePointsEarnedBubble";
import ProductCard from "./components/ProductCard";

const AchievementsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CONGRATULATIONS</Text>
            <Text style={styles.text}>You have earned</Text>
            <VenturePointsEarned />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Only 150 Points Away From Redeeming</Text>
           </View>
             <ProductCard title={"Atom Hoody Women's"} redeemed={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32A366',
        alignItems: 'center',

    },
    title: {
        fontSize: 35,
        color:"#fff",
        fontWeight: 'bold',
        paddingTop: 25,
    },
    textContainer: {
        width: 250,
        paddingBottom:10,
    },
    text: {
        paddingTop:5,
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    }
   
    
});

export default AchievementsScreen