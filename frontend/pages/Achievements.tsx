import { View, Text, StyleSheet } from "react-native";
import VenturePointsEarned from "./components/VenturePointsEarnedBubble";
import ProductCardSmall from "./components/ProductCardSmall";

const AchievementsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CONGRATULATIONS</Text>
            <Text style={styles.text}>You have earned</Text>
            <VenturePointsEarned />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Only 150 Points Away From Redeeming</Text>
           </View>
             <ProductCardSmall title={"Atom Hoody Women's"} redeemed={false} image='https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S24-X000009293-Atom-Lightweight-Hoody-Alpine-Rose-Women-s-Front-View.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.7.0&w=1350' 
             company="Arc'Teryx" desc= '2000 points for 20% off'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32A366',
        alignItems: 'center',
        paddingTop:100,
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