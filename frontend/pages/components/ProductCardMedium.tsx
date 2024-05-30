import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';

import colors from '../../assets/themes/Colors'
import appStyles from '../../assets/themes/Styles';

const ProductCardMedium = ({ item, brand, points, description, image, redeemed, navigation }) => {

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: image}}
        style={styles.image} 
      />
      <View style={styles.infoContainer}>
        <View style={styles.headContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item}</Text>
                <Text style={styles.brand}>{brand}</Text>
            </View>
            <Text style={styles.points}>{points} pts</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Button
          title="Redeem"
          buttonStyle={appStyles.smallButton}
          titleStyle={appStyles.smallButtonTitle}
          onPress={() =>
            navigation.navigate('Product', { 
              item: item,
              brand: brand,
              image: image,
              points: points,
              description: description,
              redeemed: redeemed
            })
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
    headContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 16,
    },
    brand: {
        fontSize: 14,
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

export default ProductCardMedium;