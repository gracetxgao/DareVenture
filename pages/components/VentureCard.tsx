import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VentureCard = ({ title }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('VenturePage' as never);
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View>
        <Image 
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/330px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'}}
          style={styles.image} />
      </View>
      <View>
        <Text>{title}</Text>
        <Text>venture description</Text>
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

export default VentureCard;