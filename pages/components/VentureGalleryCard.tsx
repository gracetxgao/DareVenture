import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const VentureGalleryCard = ({ title }) => {

  return (
    <View style={styles.container}>
      <View>
        <Image 
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/330px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'}}
          style={styles.image} />
      </View>
      <View>
        <Text>{title}</Text>
        <Text>completed on ...</Text>
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

export default VentureGalleryCard;