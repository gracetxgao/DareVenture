import { StyleSheet } from 'react-native';
import colors from './Colors'

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 20,
        borderRadius: 30,
        backgroundColor: colors.accent,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    backButton: {
        position: 'absolute',
        top: 70,
        left: 20,
    }
});

export default appStyles