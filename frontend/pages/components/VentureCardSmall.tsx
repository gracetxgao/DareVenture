import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import colors from '../../assets/themes/Colors'
import appStyles from '../../assets/themes/Styles';

import { RootStackParamList } from './Navigation';

const hikingPhoto = "https://www.hellobc.com/content/uploads/2018/02/6-2756-1024x683.jpg";

const VentureCardSmall = ({ title, image, points, description, navigation }) => {

  const handleCardPress = () => {
    navigation.navigate('Venture', { 
      title: title,
      image: image,
      points: points,
      description: description
    });
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.points}>{points} pts</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      borderWidth: 2,
      borderColor: colors.lightAccent,
      borderRadius: 20,
      marginHorizontal: 10,
      padding: 10,
      width: 170,
    },
    image: {
      width: 130, 
      height: 130,
      margin: 5
    },
    textContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      color: colors.textPrimary
    },
    points: {
      fontSize: 12,
      color: colors.accent,
      paddingLeft: 10
    }
});

export default VentureCardSmall;