import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const RedeemedItemPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: 'https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S24-X000007712-Coelle-Lightweight-Jacket-Black-Sapphire-Women-s-Front-View.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.7.0&w=1350'}}
              style={styles.productImage} />
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionLeft}>
          <Text>mantis backpack</Text>
          <Text>arcteryx</Text>
          <Text>100% off</Text>
        </View>
        <View style={styles.descriptionRight}>
          <Text>redeemed</Text>
        </View>
      </View>
      <View style={styles.barcode}>
          <Text>your barcode</Text>
          <Image source={{uri: 'https://cdn-dfhjh.nitrocdn.com/BzQnABYFnLkAUVnIDRwDtFjmHEaLtdtL/assets/images/optimized/rev-ecb332d/www.gtin.info/wp-content/uploads/2015/02/barcode-3.png'}}
              style={styles.barcodeImage} />
          <Button buttonStyle={styles.button}
                title="redeem"
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
  },
  productImage: {
    width: 400, 
    height: 300,
  },
  barcodeImage: {
    width: 300, 
    height: 200,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  descriptionLeft: {
    alignItems: 'flex-start',
  },
  descriptionRight: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10
  },
  barcode: {
    alignItems: 'center'
  },
  button: {
    margin: 20,
    borderRadius: 50,
    backgroundColor: '#5DB075',
    fontFamily: "Inter", // get font later!!
    width: 150,
},
});

export default RedeemedItemPage;