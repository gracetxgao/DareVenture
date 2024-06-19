import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';

const Badge = ({ title, description, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'column',
    padding: 18,
    backgroundColor: 'white',
    paddingLeft: 30,
    width: 250
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#34623F'
  },
  image: {
    width: 70,
    height: 70
  }
});

export default Badge;