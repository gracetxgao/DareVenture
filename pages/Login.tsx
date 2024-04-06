import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text>login screen</Text>
            <Button
                title="login"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
            <Button
                title="signup"
                onPress={() =>
                    navigation.navigate('Signup')
                }
            />
        </View>
    )
}

export default LoginScreen;