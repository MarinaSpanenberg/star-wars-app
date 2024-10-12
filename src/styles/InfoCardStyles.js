import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./globalStyles";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
      },
      label: {
        color: colors.yellow,
        fontSize: fontSizes.medium,
        marginBottom: 7,
      },
      info: {
        color: colors.white,
        fontSize: fontSizes.small,
        maxWidth: "90%",
      },
      infoNotInformed: {
        color: colors.red,
      },
})