import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const VentureCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/330px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'}}
              style={styles.image} />
      </View>
      <View>
        <Text>venture title</Text>
        <Text>venture description</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    image: {
      width: 100, 
      height: 100
    },
});

export default VentureCard;