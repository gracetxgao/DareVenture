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
                        buttonStyle={styles.button}
                        title="venture gallery"
                        titleStyle={styles.buttonTitle}
                        onPress={() =>
                            navigation.navigate('VentureGallery')
                        }
                    />
                </View>
            </View>
            <View>
                <Text style={styles.componentTitle}>Your Venture Wishlist</Text>
                <ProductsBox cards={[["first", "second", "third"]]} redeemed={false}/>
            </View>
            <View>
                <Text style={styles.componentTitle}>Redeemed Items</Text>
                <ProductsBox cards={[["first", "second", "third"]]} redeemed={true}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 50,
        //borderWidth: 1,
        //borderColor: 'black',
        padding: 10,
        backgroundColor: 'white',
        
    },
    points: {
        flexDirection: 'row',
        //borderWidth: 1,
        //borderColor: 'black',
        marginBottom: 2,
        
    },
    pointsRight: {
        flexDirection: 'column',
        //borderWidth: 1,
        //borderColor: 'black',
        paddingRight: 8,
        paddingLeft: 8,
        borderRadius: 10,
        
        
    },
    pointsLeft: {
        flexDirection: 'column',
        //borderWidth: 1,
        //borderColor: 'black',
        paddingLeft: 12,
        paddingRight: 20,
        borderRadius: 10,
    },
    sideBox: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        // borderWidth: 1,
        //borderColor: 'black',
        alignSelf: 'flex-end',
        alignItems: 'center',
        margin: 2,
        marginRight: 10,

        shadowColor: "#000000",
        shadowOpacity: 0.17,
        shadowRadius: 3,
        shadowOffset: {
          height: 1,
          width: 1
        }
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
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0D4803',
    },
    sideBoxSubText: {
        fontSize: 9,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 35,
        width: 140,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 10,
        marginRight: 8,
        shadowColor: "#000000",
        shadowOpacity: 0.17,
        shadowRadius: 3,
        shadowOffset: {
          height: 1,
          width: 1
        }
    },
    buttonTitle: {
        fontSize: 12,
        color: "black",
        fontWeight: 'bold',
        
    },
});

export default ProfileScreen;