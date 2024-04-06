import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text>login</Text>
            <Input
                placeholder='email'
            />
            <Input
                placeholder='password'
            />
            <Button
                title="login"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
            <Button
                title="create an account"
                onPress={() =>
                    navigation.navigate('Signup')
                }
            />
        </View>
    )
}

export default LoginScreen;