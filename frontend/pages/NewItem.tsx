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
          <Text style={styles.productTitle}>Atom Hoody Women's</Text>
          <Text style={styles.productDesc}>Arc'Teryx</Text>
          <Text style={styles.productDesc}>2000 points for 20% off</Text>
      </View>
      <Button buttonStyle={styles.button}
      titleStyle={styles.buttonTitle}
            title="Redeem"
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
      margin: 50,
      paddingTop: 30,
  },
  productImage: {
    width: 300, 
    height: 400,
    borderRadius: 15,
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
    marginTop: 40,
    borderRadius: 50,
    backgroundColor: '#5DB075',
    width: 250,
    fontWeight: 'bold',

    shadowColor: "#000000",
    shadowOpacity: 0.17,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2
    },
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  productDesc: {
    fontSize: 15,
    //fontWeight: 'bold',
    marginTop: 10,
    color: '#ACACAC',
  },
  buttonTitle: {
    fontWeight: 'bold',
  }
});

export default NewItemPage;