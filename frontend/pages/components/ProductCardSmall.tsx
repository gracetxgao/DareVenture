import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";

import colors from '../../assets/themes/Colors'
import appStyles from '../../assets/themes/Styles';

const ProductCardSmall = ({ item, brand, image, points, description, redeemed, navigation }) => {
  const handleCardPress = () => {
    navigation.navigate('Product', { 
      item: item,
      brand: brand,
      image: image,
      points: points,
      description: description,
      redeemed: redeemed
    });
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.title}>{item}</Text>
          <Text style={styles.brand}>{brand}</Text>
        </View>
        <Text style={styles.points}>{points} pts</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
      <Button
          title="Use"
          buttonStyle={appStyles.smallButton}
          titleStyle={appStyles.smallButtonTitle}
        />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      borderWidth: 2,
      borderColor: colors.lightAccent,
      borderRadius: 20,
      marginHorizontal: 10,
      padding: 10,
      width: 170,
    },
    image: {
      width: 130, 
      height: 130,
      margin: 5
    },
    textContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    infoTextContainer: {
      flex: 1,
      justifyContent: 'space-between',
      // borderWidth: 2,
      // borderColor: 'black'
      // alignItems: 'center',
    },
    title: {
      fontSize: 16,
      color: colors.textPrimary
    },
    points: {
      fontSize: 12,
      color: colors.accent,
      paddingLeft: 10
    },
    brand: {
      fontSize: 12,
      color: colors.textPrimary
    },
});

export default ProductCardSmall;