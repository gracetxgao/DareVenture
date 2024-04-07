import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RedeemedItemPage from '../RedeemedItem';
import NewItemPage from '../NewItem';

const ProductCard = ({ title, redeemed, image, company, desc }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    if (redeemed) {
      navigation.navigate('RedeemedItemPage' as never);
    } else {
      navigation.navigate('NewItemPage' as never);
    }
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View>
        <Image source={{uri: image}}
              style={styles.image} />
      </View>
      <View>
        <Text style={styles.item}>{title}</Text>
        <Text style={styles.text}>{company}</Text>
        <Text style={styles.text}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        width: 160, 
        height: 220,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        //borderColor: 'black',
        marginRight: 5,
    },
    image: {
      marginTop: 8,
      width: 135, 
      height: 140,
      borderRadius: 20,
    },
    item: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 8,
    },
    text: {
      paddingTop:2,
      color: '#AEAEAE',
      fontSize: 10,
    }
});

export default ProductCard;