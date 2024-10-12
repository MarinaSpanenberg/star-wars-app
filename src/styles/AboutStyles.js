import { StyleSheet } from "react-native";
import { colors } from "./globalStyles";

export default StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: colors.notReallyBlack,
    },
    header: {
        height: 290,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    imageContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    meImage: {
        height: 280,
        marginBottom: 10,
        resizeMode: 'contain'
    },
})