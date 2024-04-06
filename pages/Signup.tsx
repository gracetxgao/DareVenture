import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';

const SignupScreen = ({ navigation }) => {
    return (
        <View>
            <Text>signup screen</Text>
            <Button
                title="create account"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
        </View>
    )
}

export default SignupScreen;