import { View, Text, StyleSheet } from "react-native";
import ProductsBox from "./components/ProductsBox";
import VenturePoints from "./components/VenturePointsBubble";
import { Button } from 'react-native-elements';

const CurrentStreak = () => {
    return (
        <View style={styles.sideBox}>
            <Text style={styles.sideBoxTitle}>Current Streak</Text>
            <Text style={styles.sideBoxNumber}>15</Text>
            <Text style={styles.sideBoxSubText}>days</Text>
        </View>
    )
}

const VenturesCompleted = () => {
    return (
        <View style={styles.sideBox}>
            <Text style={styles.sideBoxTitle}>    Completed    </Text>
            <Text style={styles.sideBoxNumber}>63</Text>
            <Text style={styles.sideBoxSubText}>ventures</Text>
        </View>
    )
}

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.points}>
                <View style={styles.pointsLeft}>
                    <Text style={styles.name}>Name</Text>
                    <Text>@username_836899</Text>
                    <VenturePoints />
                </View>
                <View style={styles.pointsRight}>
                    <CurrentStreak />
                    <VenturesCompleted />
                    <Button
                        style={styles.button}
                        title="venture gallery"
                        onPress={() =>
                            navigation.navigate('VentureGallery')
                        }
                    />
                </View>
            </View>
            <View>
                <Text style={styles.componentTitle}>Your Venture Wishlist</Text>
                <ProductsBox cards={["first", "second", "third"]} redeemed={false}/>
            </View>
            <View>
                <Text style={styles.componentTitle}>Redeemed Items</Text>
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
    pointsLeft: {
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
        alignItems: 'center',
        margin: 2,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    componentTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    sideBoxTitle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    sideBoxNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0D4803',
    },
    button: {
        fontSize: 10,
        backgroundColor: '#31A672',
        borderRadius: 50,
        height: 40,
        width:140,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
    },
    sideBoxSubText: {
        fontSize: 5,
    }
});

export default ProfileScreen;