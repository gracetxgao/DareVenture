import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const MainVentureCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image 
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/330px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'}}
          style={styles.image} />
      </View>
      <View>
        <Text>title text</Text>
        <Text>description text</Text>
        <Button
          title="venture now"
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
    image: {
      width: 200, 
      height: 200
    },
});

export default MainVentureCard;