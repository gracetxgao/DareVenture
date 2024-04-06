import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


const OpeningScreen = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DareVenture</Text>
            <Button style={styles.button}
                title="Login"
                onPress={() =>
                    navigation.navigate('Login')
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        paddingBottom: 20
    },
    button: {
        margin: 20
    }
  });

export default OpeningScreen;