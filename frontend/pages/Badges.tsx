import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Badge from './components/Badge';

const compassImg = require('../assets/compass.png');

const BadgesPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>my badges</Text>
      <Badge 
        title="Adventure Seeker"
        description="Complete 5 Ventures"
        image={compassImg}
        />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 50,
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',       
  },
  text: {
    fontSize: 24,
  },
});

export default BadgesPage;
