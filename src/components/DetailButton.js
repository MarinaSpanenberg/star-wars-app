import { Text, TouchableOpacity } from "react-native";
import { colors, fontSizes, globalStyles } from "../styles/globalStyles";

export default function DetailButton ({title, action, customButtonStyle, customTextStyle}){
    return(
        <TouchableOpacity
            style={[globalStyles.button, customButtonStyle]}>
                <Text style={[globalStyles.buttonText, customTextStyle, {fontFamily: 'Aurebesh-English'}]} onPress={action}>{title}</Text>
            </TouchableOpacity>
    );
}