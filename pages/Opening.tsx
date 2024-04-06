import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';


const OpeningScreen = ({ navigation }) => {
    
    return (
        <View>
            <Text>DareVenture</Text>
            <Button
                title="Login"
                onPress={() =>
                    navigation.navigate('Login')
                }
            />
        </View>
    )
}

export default OpeningScreen;