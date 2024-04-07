import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const NewItemPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: 'https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S24-X000007712-Coelle-Lightweight-Jacket-Black-Sapphire-Women-s-Front-View.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.7.0&w=1350'}}
              style={styles.productImage} />
      </View>
      <View style={styles.description}>
          <Text>Atom Hoody Women's</Text>
          <Text>Arc'Teryx</Text>
          <Text>20% off</Text>
      </View>
      <Button buttonStyle={styles.button}
            title="redeem"
            onPress={() =>
                navigation.navigate('RedeemedItemPage')
            }
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection:'column',
  },
  productImage: {
    width: 400, 
    height: 600,
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  descriptionLeft: {
    alignItems: 'flex-start',
  },
  descriptionRight: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10
  },
  barcode: {
    alignItems: 'center'
  },
  button: {
    margin: 20,
    borderRadius: 50,
    backgroundColor: 'green',
    // fontFamily: "Inter", // get font later!!
    width: 150,
},
});

export default NewItemPage;