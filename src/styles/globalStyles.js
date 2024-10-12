import { StyleSheet } from "react-native"
import { useFonts } from "expo-font";

export const colors = {
    coldGray: '#293B4B',
    darkBlue: '#0123A2',
    darkGreen: '#00A264',
    lightBlue: '#387DEB',
    lightGreen: '#98FCD9',
    red: '#FF2606',
    notReallyBlack: '#031010',
    purple: '#4F0E45',
    warmGray: '#7B6958',
    white: '#FFFFFF',
    yellow: '#F5ED17',
};

export const fontSizes = {
    small: 12,
    medium: 15,
    big: 25,
  };

export const globalStyles = StyleSheet.create({
    button: {
        width: "40%",
        height: 39,
        backgroundColor: colors.notReallyBlack,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 30,
        borderColor: colors.yellow,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
      },
      buttonText: {
        fontSize: fontSizes.medium,
        color: colors.yellow,
      },
});