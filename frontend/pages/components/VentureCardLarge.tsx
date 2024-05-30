import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import colors from '../../assets/themes/Colors';

const VentureGalleryLarge = ({ navigation, title, image, points, description, user, date }) => {
  const handleCardPress = () => {
    console.log('large', title, points, description);
    navigation.navigate('Venture', { 
      title: title,
      image: image,
      points: points,
      description: description
    });
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomTextItem}>@{user}</Text>
        <Text style={styles.bottomTextItem}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.lightAccent,
    marginTop: 20,
    borderRadius: 20,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  image: {
    width: 350,
    height: 350,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  bottomTextItem: {
    color: colors.textPrimary,
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
});

export default VentureGalleryLarge;
