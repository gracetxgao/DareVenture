import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const VentureGalleryCard = ({ title, image, date }) => {

  return (
    <View style={styles.container}>
      <View>
        <Image 
          source={{uri: image}}
          style={styles.image} />
      </View>
      <View>
        <Text>{title}</Text>
        <Text>completed on {date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginTop: 20,
        marginBottom: 20,
        paddingBottom:20,
        borderRadius:20,
        
    },
    image: {
      borderRadius:20,
      width: 400, 
      height: 200,
    },
});

export default VentureGalleryCard;