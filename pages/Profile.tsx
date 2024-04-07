import { View, Text, StyleSheet } from "react-native";
import ProductsBox from "./components/ProductsBox";
import VenturePoints from "./components/VenturePointsBubble";
import { Button } from 'react-native-elements';

const CurrentStreak = () => {
    return (
        <View style={styles.sideBox}>
            <Text style={styles.sideBoxTitle}>Current Streak</Text>
            <Text style={styles.sideBoxNumber}>15</Text>
            <Text>days</Text>
        </View>
    )
}

const VenturesCompleted = () => {
    return (
        <View style={styles.sideBox}>
            <Text style={styles.sideBoxTitle}>Completed</Text>
            <Text style={styles.sideBoxNumber}>63</Text>
            <Text>ventures</Text>
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
                        title="venture gallery"
                        onPress={() =>
                            navigation.navigate('VentureGallery')
                        }
                    />
                </View>
            </View>
            <View>
                <Text style={styles.componentTitle}>your venture wishlist</Text>
                <ProductsBox cards={["first", "second", "third"]} redeemed={false}/>
            </View>
            <View>
                <Text style={styles.componentTitle}>redeemed venture items</Text>
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
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    componentTitle: {
        fontSize: 20,
    },
    sideBoxTitle: {
        fontWeight: 'bold',
    },
    sideBoxNumber: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#0D4803',
    },
});

export default ProfileScreen