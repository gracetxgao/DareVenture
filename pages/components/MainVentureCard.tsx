import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';

const MainVentureCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image 
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/330px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'}}
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
        borderColor: 'black',
    },
    ventureContainer: { 
      flex:1
      
    },
    image: {
      marginLeft: 10,
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
    },
    title: {
      marginTop: 10,
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 25,
      flexWrap: 'wrap',
    },
    ventureDes: {
      color:'#AEAEAE',
      marginLeft: 10,
    }
});

export default MainVentureCard;