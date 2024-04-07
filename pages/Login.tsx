import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            
            <Input
                style={styles.input}
                placeholder='Email'
            />
            <Input
                style={styles.input}
                placeholder='Password'
            />
            <Button
                buttonStyle ={styles.button}
                title="Log In"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
            <Button
                buttonStyle ={styles.button}
                title="Create An Account"
                onPress={() =>
                    navigation.navigate('Signup')
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    title: {
        paddingBottom: 60,
        paddingTop:30,
        fontSize: 45,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#31A672',
        borderRadius: 50,
        height: 50,
        width:300,
        marginTop: 30,
    },
    input: {
        borderStyle: 'solid',
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        
    }



});


export default LoginScreen;