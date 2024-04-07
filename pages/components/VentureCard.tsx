import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VentureCard = ({ title, image, desc }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('VenturePage' as never);
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View>
        <Image 
          source={{uri: image}}
            style={styles.image} />
      </View>
      <View>
        <Text>{title}</Text>
        <Text>{desc}</Text>
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
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      width: 175, 
      height: 125,
      borderRadius: 25,
    },
});

export default VentureCard;