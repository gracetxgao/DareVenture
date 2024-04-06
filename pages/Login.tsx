import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Log In</Text>
            <Input
                placeholder='Email'
            />
            <Input
                placeholder='Password'
            />
            <Button
                buttonStyle ={styles.button}
                title="login"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
            <Button
                buttonStyle ={styles.button}
                title="create an account"
                onPress={() =>
                    navigation.navigate('Signup')
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 45,
        alignContent: "center",
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#5DB075',
    }



});


export default LoginScreen;