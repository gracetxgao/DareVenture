import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductCard = ({ title }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: 'https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S24-X000009293-Atom-Lightweight-Hoody-Alpine-Rose-Women-s-Front-View.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.7.0&w=1350'}}
              style={styles.image} />
      </View>
      <View>
        <Text>{title}</Text>
        <Text>venture description</Text>
      </View>
    </View>
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