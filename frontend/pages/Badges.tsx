import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BadgesPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>my badges</Text>
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
