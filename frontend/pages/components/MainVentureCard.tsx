import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';

const MainVentureCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image 
          source={{uri: 'https://d131tjlifx1tzx.cloudfront.net/wp-content/uploads/2019/02/healthykids.jpg'}}
          style={styles.image} />
      </View>
      <View style={styles.ventureContainer}>
        <Text style={styles.title}>Time to Touch Grass</Text>
        <Text style={styles.ventureDes}>Have you been sitting by the desk all day? Take a short break away from your device by going outside to touch some grass! Whether you play some spike ball, go on a walk, or just enjoy some time lying on the grass, take a picture and share with the DareVenture community.</Text>
        <Button
          buttonStyle={styles.button}
          title="Venture now"
          onPress={() =>
            navigation.navigate('VenturePage')
        }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#fff',
    },
    ventureContainer: { 
      flex:1
    },
    image: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      width: 175, 
      height: 200,
      borderRadius: 20,
    },
    button: {
      backgroundColor: '#31A672',
      borderRadius: 50,
      height: 40,
      width:140,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      fontWeight: 'bold',
      
    },
    title: {
      marginTop: 10,
      fontWeight: 'bold',
      fontSize: 25,
      flexWrap: 'wrap',
    },
    ventureDes: {
      color:'#AEAEAE',
    }
});

export default MainVentureCard;