import { StyleSheet } from 'react-native';
import colors from './Colors'

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        margin: 20,
        borderRadius: 30,
        backgroundColor: colors.accent,
        width: 120,
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 20,
        marginVertical: 5,
    },
    backButton: {
        position: 'absolute',
        top: 70,
        left: 20,
        // borderWidth: 2,
        // borderColor: 'black'
    },
    smallButton: {
        borderRadius: 30,
        backgroundColor: colors.accent,
        width: 120,
        height: 35,
        alignSelf: 'center',
        marginTop: 10,
    },
    smallButtonTitle: {
        fontSize: 14,
    },
});

export default appStyles