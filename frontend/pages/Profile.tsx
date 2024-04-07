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
                    <Text style={styles.name}>Grace Gao</Text>
                    <Text>@username_836899</Text>
                    <VenturePoints />
                </View>
                <View style={styles.pointsRight}>
                    <CurrentStreak />
                    <VenturesCompleted />
                    <Button
                        buttonStyle={styles.button}
                        title="Venture Gallery"
                        titleStyle={styles.buttonTitle}
                        onPress={() =>
                            navigation.navigate('VentureGallery')
                        }
                    />
                </View>
            </View>
            <View>
                <Text style={styles.componentTitle}>Your Venture Wishlist</Text>
                <ProductsBox cards={[["Atom Hoody Women's", "https://s3-alpha-sig.figma.com/img/d3ba/dd32/74850102af73d30e6ba278a7e1092071?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax1KGQTtS6sSUYAt-r8Cg0rSn36ivuwz8O7zFOCyi9ZScJx1O9ohOpoqWso5uTTxHCutCGeaRIhp9DTdyKjOUDj39q-aloU0OlKcv18XidsOhcT4UXoMAjzM17H32bD~x6zN4pt1J04chEFHGdbGxgm1HLDdutY8Hk2Fj6h~dpCaO9l~aF~ucICtigbRr5NhchBbDqPyZ8pyEdbLje1GvmR-1AOkS-NSeBi-JUOOkSswof6N~xI9F68SHJLOFbgahXlgYkETZM7mQFwev0PzvZWY1IeNgRpaDA7RfT1qo-8oKoqfFvmehw8lCNMJxWq2n2u-yt--RRGCcDahO1yiyw__", "Arc'Teryx", "2000 points for 20% off"]
            ,["Bird Head Toque", "https://s3-alpha-sig.figma.com/img/6582/a5b3/9f5022cc87d6b6cf099eb897b401be3b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hn~s2SEazO2PT5iXLbGHd~44cqImn6kPRk1-9LVKG75QbAz0bFql7DGxUNqnXEFn8g3cr4bNlLYqO426cq9W0BSaQAWKZPLMha1uZjYhoA2TmoM6NDavm62uB60Lh6RI~58AmHWMYPvPHjBqNcf4vi~zxcM-ZAWbTZsOE8mL5aHCq3LuCU18naAUwQp8HrLi0QkJxISa1Kc0pxfKUMc2bPYlRYIZuW1m3KZCYN9av-tj0nLSbC96aHKddwJX6vcIQinIwtIdgKej9bz8o23hNGK2WNGosFCA2AUYFMiA7KIniZ0PCTpMB4P0BCa3UxalQ75QpHmHQdvH4tKp69py7g__", "Arc'Teryx", '700 points for 20% off']
            ,["Mantis 26 Backpack", 'https://s3-alpha-sig.figma.com/img/08ed/ad85/bcae1cd8d957dae9eb77b244ff3ef186?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0rryFwdz69pJoZQM0JJemNXAK5eri29UTeXUo4eoPTGGklWsYUid7gR9Y2nBsltbLspFVpaB8QBisB-R~plQlzUMtEDCQLbotKHOHe9YAKJzr0ptCuzCvBrhziwZ5P5r0jtzFsRcpj-jbi6STTLa1W2QBotikt9TVJRMlbCdfSPXtvgPafDFoysKiPQ0dvqe9y~0SPzf7uA-FXjoCzLBaTl9h-dD2Tr9TLLgm8Cks-bQXEfOOSxvQNHaACeORUYB1XURgWjb2l7ikmR9lkYem1qJUbF0ai6t-FSOLbFCvTVN8rdHy2LMZaHpkJQ8KzXOMa2f6p-HbJD-GHb1Pf52Q__', "Arc'Teryx", "2000 points for 20% off"],["Taema Crop Word T-Shirt Women's","https://s3-alpha-sig.figma.com/img/dea9/8867/5c2dd0a25ace1b796522048058559299?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G-0sdIo~WHGpAyn-ir~MJis7dEs61IxAZ0AqDIpNzJDio1hlPB93oZcVks1SBQ5xDEFBDrqTF1gKBwvVhWc4zn675AHthMrS2vrVk3wB1N2DXjqnVIdKqI4oTpEDRWniyiwXMJejtP4LUdvQ3K19n1fHpzEuMwyJeipszr0xKRxtLvKmsf2rGDJmTzwi5ASeokodjju22NeMW0VN1YZOE8KuRnWObCgw7b7oKu3dHHeyub03p9XaGhyi5VIsdFLB9gCPiql1TarB2JRyPx4W6T6TbqHht-6-OUyMBEzmeGJnzKvhNLPyk7BNydzOs1PGYs2PdsRA0soUkIg0Z9qKAQ__", "1000 points for 20% off"],
        ]} redeemed={false}/>
            </View>
            <View>
                <Text style={styles.componentTitle}>Redeemed Items</Text>
                <ProductsBox cards={[["Mantis 26 Backpack", 'https://s3-alpha-sig.figma.com/img/08ed/ad85/bcae1cd8d957dae9eb77b244ff3ef186?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0rryFwdz69pJoZQM0JJemNXAK5eri29UTeXUo4eoPTGGklWsYUid7gR9Y2nBsltbLspFVpaB8QBisB-R~plQlzUMtEDCQLbotKHOHe9YAKJzr0ptCuzCvBrhziwZ5P5r0jtzFsRcpj-jbi6STTLa1W2QBotikt9TVJRMlbCdfSPXtvgPafDFoysKiPQ0dvqe9y~0SPzf7uA-FXjoCzLBaTl9h-dD2Tr9TLLgm8Cks-bQXEfOOSxvQNHaACeORUYB1XURgWjb2l7ikmR9lkYem1qJUbF0ai6t-FSOLbFCvTVN8rdHy2LMZaHpkJQ8KzXOMa2f6p-HbJD-GHb1Pf52Q__',
            "Arc'Teryx", "2000 points for 20% off"],
        ["Aerios Mid GTX", "https://s3-alpha-sig.figma.com/img/294d/ac68/2b34d9365105c495650ff9f58a7d0f9d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JmCqsvMbneSC3o8OZSorURY90jXwQsiCz57vxVw6bOx3JSKZddEUaWiqkUn-0-oJUs0Wa2a4CArQAx5yYGfhUbRp2dsecPW2Yno~gh6tLuHVx9dFo6kgAFP8COtjNDZj4fwo6N62W1-KEyxOm~azhq3DScJWG4ZnXQ04LMCOn4d6l0ctX0lIJkmyQGgVIcCVfPGoiM5CWy0db4IQBEvxWMgGLysWSkmhyBsA8EYMZmkfDJzAQORl5v-fmAzyc9EiJlJyfcHLcIGGhhkGuTZrWuEy5PsPqIWI2E0grEf7mad0kpymfAlbsGz9Ifc1Eko5eSWER4322zB9qaPzNfuqAg__",
        "Arc'Teryx", '1000 points for 15% off']]} redeemed={true}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 30,
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
        paddingTop: 15,
        
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

        // shadowColor: "#000000",
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.17,
        // shadowRadius: 3.84,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    componentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
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
        fontSize: 15,
        color: "black",
        fontWeight: 'bold',
        
    },
});

export default ProfileScreen;