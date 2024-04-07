import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RedeemedItemPage from '../RedeemedItem';
import NewItemPage from '../NewItem';

const ProductCard = ({ title, redeemed }) => {
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
        <Image source={{uri: 'https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S24-X000009293-Atom-Lightweight-Hoody-Alpine-Rose-Women-s-Front-View.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.7.0&w=1350'}}
              style={styles.image} />
      </View>
      <View>
        <Text style={styles.item}>{title}</Text>
        <Text style={styles.text}>Arc’Teryx</Text>
        <Text style={styles.text}>2000 points for 20% off</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        width: 230, 
        height: 300,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        borderColor: '#fff'
    },
    image: {
      marginTop:15,
      width: 200, 
      height: 200,
      borderRadius: 20,
    },
    item: {
      fontSize: 17,
      fontWeight: 'bold',
      marginTop: 10,
    },
    text: {
      paddingTop:2,
      color: '#AEAEAE',
      fontSize: 13,
    }
});

export default ProductCard;