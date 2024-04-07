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
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>Completed on {date}</Text>
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
        alignItems: 'center',
        
    },
    image: {
      marginTop:20,
      borderRadius:20,
      width: 350, 
      height: 200,
      
    },
    textContainer: {
      marginLeft: -150,
      marginTop:5,
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom:3,
    },
    


});

export default VentureGalleryCard;