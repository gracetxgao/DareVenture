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
        <Text>{title}</Text>
        <Text>description</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black'
    },
    image: {
      width: 200, 
      height: 200,
    },
});

export default ProductCard;