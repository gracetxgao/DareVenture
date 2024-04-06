import { Text, View } from 'react-native';
import { Button, Input, CheckBox } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
    return (
        <View>
            <Text>signup</Text>
            <Input
                placeholder='name'
            />
            <Input
                placeholder='email'
            />
            <Input
                placeholder='password'
            />
            <CheckBox
                title='i would like to recieve your newsletter...'
            />
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