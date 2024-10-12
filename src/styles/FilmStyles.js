import { StyleSheet } from "react-native";
import { colors } from "./globalStyles";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.notReallyBlack,
    },
    header: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        position: 'relative',
    },
    /*imageContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    filmImage: {
        height: 280,
        marginBottom: 10,
        resizeMode: 'contain'
    },*/
    text: {
        color: colors.white,
    }
})