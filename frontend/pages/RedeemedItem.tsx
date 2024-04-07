import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const RedeemedItemPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} >
        <Image source={{uri: 'https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S24-X000007712-Coelle-Lightweight-Jacket-Black-Sapphire-Women-s-Front-View.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.7.0&w=1350'}}
              style={styles.productImage} />
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionLeft}>
          <Text style={styles.item}>Atom Hoody Women's</Text>
          <Text>Arc'Teryx</Text>
          <Text>20% off</Text>
        </View>
        <View style={styles.descriptionRight}>
          <Text style={styles.redeemed}>Redeemed</Text>
        </View>
      </View>
      <View style={styles.barcode}>
          <Text style={styles.barcodeText}>Your Barcode</Text>
          <Image source={{uri: 'https://cdn-dfhjh.nitrocdn.com/BzQnABYFnLkAUVnIDRwDtFjmHEaLtdtL/assets/images/optimized/rev-ecb332d/www.gtin.info/wp-content/uploads/2015/02/barcode-3.png'}}
              style={styles.barcodeImage}
              resizeMode='contain' />
          <Button buttonStyle={styles.button}
                title="Purchase Online"
                onPress={() =>
                    navigation.navigate('RedeemedItemPage')
                }
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection:'column',
      marginTop:80,  
  },
  imageContainer: {
    alignItems: 'center',
  },
  productImage: {
    borderRadius: 25,
    width: 300, 
    height: 400,
  },
  barcodeImage: {
    width: 400, 
    height: 160,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  descriptionLeft: {
    alignItems: 'flex-start',
    marginLeft: 45,
    marginTop:10,
  },
  descriptionRight: {
    marginTop:15,
    marginRight:30,
    alignItems: 'center',
    height:25,
    width: 100,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
  },
  item: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  barcodeText: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  barcode: {
    alignItems: 'center'
  },
  button: {
    margin: 20,
    borderRadius: 50,
    backgroundColor: 'orange',
    fontFamily: "Inter", // get font later!!
    fontWeight: 'bold',
    width: 175,
  },
  redeemed: {
    fontSize: 15,
    fontWeight: 'bold',
    height:15,
    color: '#fff',
  }

});

export default RedeemedItemPage;