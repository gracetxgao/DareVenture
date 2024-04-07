import { Text, View, StyleSheet} from 'react-native';
import { Button, Input, CheckBox } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <Input
                placeholder='Name'
                style={styles.input}
            />
            <Input
                placeholder='Email'
                style={styles.input}
            />
            <Input
                placeholder='Password'
                style={styles.input}
            />
            <CheckBox
                title='I would like to receive your newsletter and other promotional information.'
            />
            <Button
                buttonStyle={styles.button}
                title="Sign Up"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        paddingBottom: 60,
        paddingTop:30,
        fontSize: 45,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#5DB075',
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

export default SignupScreen;