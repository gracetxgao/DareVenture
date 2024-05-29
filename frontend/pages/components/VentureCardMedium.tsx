import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import colors from '../../assets/themes/Colors'
import appStyles from '../../assets/themes/Styles';

const VentureCardMedium = ({ title, points, description, image, navigation }) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: image}}
        style={styles.image} 
      />
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.points}>{points} pts</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Button
          title="Venture now"
          buttonStyle={appStyles.smallButton}
          titleStyle={appStyles.smallButtonTitle}
          onPress={() =>
            navigation.navigate('Venture')
        }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: colors.lightAccent,
      marginTop: 10,
      borderRadius: 20,
      backgroundColor: colors.primary,
      alignItems: 'center',
      padding: 20,
    },
    infoContainer: { 
      flex: 1,
      height: 140,
      paddingLeft: 20,
      justifyContent: 'space-around',
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
    },
    points: {
      fontSize: 12,
      color: colors.accent
    },
    image: {
      width: 140, 
      height: 140,
    },
    description: {
      fontSize: 12,
    }
});

export default VentureCardMedium;