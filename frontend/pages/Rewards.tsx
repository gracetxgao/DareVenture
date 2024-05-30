import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SearchBar } from '@rneui/themed';

import ProductsBox from "./components/ProductsBox";
import ProductCardMedium from './components/ProductCardMedium';
import colors from '../assets/themes/Colors';
import appStyles from '../assets/themes/Styles';
import { color } from '@rneui/base';

const photo = "https://images.lululemon.com/is/image/lululemon/LW5DCES_038470_2?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
const RewardsScreen = ({ navigation }) => {
    const [search, setSearch] = useState("")

    const updateSearch = () => {
        setSearch(search)
    }

    return (
        <View style={appStyles.container}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.bubbleContainer}>
                    <View style={styles.currBubbleContainer}>
                        <Text style={styles.currBubbleText}>{"120\npts"}</Text>
                    </View>
                    <View style={styles.bubbleGroupContainer}>
                        <Text style={styles.bubbleDesc}>all time</Text>
                        <View style={styles.bubblesContainer}>
                            <View style={styles.prevBubbleContainer}>
                                <Text style={styles.prevBubbleText}>{"1400\npts"}</Text>
                            </View>
                            <View style={styles.prevBubbleContainer}>
                                <Text style={styles.prevBubbleText}>{"$125\nsaved"}</Text>
                            </View>
                            <View style={styles.prevBubbleContainer}>
                                <Text style={styles.prevBubbleText}>{"12\nitems"}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.title}>Redeemed Items</Text>
                <ProductsBox 
                    navigation={navigation} 
                    cards={[
                        { item: "align leggings", brand:"lululemon", image: photo, points: '400', description: '20% off\noriginal price: $400\ndiscounted price: $320\namount saved: $80', redeemed: false },
                        { item: "align leggings", brand:"lululemon", image: photo, points: '400', description: '20% off\noriginal price: $400\ndiscounted price: $320\namount saved: $80', redeemed: false },
                        { item: "align leggings", brand:"lululemon", image: photo, points: '400', description: '20% off\noriginal price: $400\ndiscounted price: $320\namount saved: $80', redeemed: false },
                    ]}
                />
                <SearchBar
                    placeholder="search"
                    onChangeText={updateSearch}
                    value={search}
                    platform='ios'
                    showLoading={false}
                    searchIcon={false}
                />
                <ProductCardMedium 
                    navigation={navigation} 
                    item="align leggings" 
                    brand="lululemon"
                    points="400" 
                    image={photo}
                    redeemed={false}
                    description={'20% off\noriginal price: $400\ndiscounted price: $320\namount saved: $80'}
                />
                <ProductCardMedium 
                    navigation={navigation} 
                    item="align leggings" 
                    brand="lululemon"
                    points="400" 
                    image={photo}
                    redeemed={false}
                    description={'20% off\noriginal price: $400\ndiscounted price: $320\namount saved: $80'}
                />
                <ProductCardMedium 
                    navigation={navigation} 
                    item="align leggings" 
                    brand="lululemon"
                    points="400" 
                    image={photo}
                    redeemed={false}
                    description={'20% off\noriginal price: $400\ndiscounted price: $320\namount saved: $80'}
                />
                <ProductCardMedium 
                    navigation={navigation} 
                    item="align leggings" 
                    brand="lululemon"
                    points="400" 
                    image={photo}
                    redeemed={false}
                    description={'20% off\noriginal price: $400\ndiscounted price: $320\namount saved: $80'}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        // paddingBottom: 10,
        marginLeft: 15,
    },
    bubbleContainer: {
        flexDirection: 'row',
        // flex: 1,
        marginTop: 20,
        marginLeft: 15,
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center'
    },
    currBubbleContainer: {
        borderRadius: 50,
        width: 100,
        height: 100,
        backgroundColor: colors.accent,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    currBubbleText: {
        // flex: 1,
        fontSize: 24,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: colors.primary,
        fontWeight: 'bold'
    },
    bubbleGroupContainer: {
        flex: 3,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.lightAccent,
        paddingVertical: 10,
        paddingHorizontal: 10,
        textAlign: 'center'
    },
    bubbleDesc: {
        fontSize: 12,
        alignSelf: 'center',
        marginBottom: 5
    },
    bubblesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    prevBubbleContainer: {
        borderRadius: 40,
        width: 80,
        height: 80,
        backgroundColor: colors.accent,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    prevBubbleText: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.primary,
        fontWeight: 'bold'
    },
});

export default RewardsScreen