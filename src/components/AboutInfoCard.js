import { Text, View } from "react-native";
import React from "react";
import FontLoader from "./FontLoader";
import InfoCardStyles from "../styles/InfoCardStyles";

export default function AboutInfoCard({ label, info }) {
  return (
    <FontLoader>
    <View style={InfoCardStyles.container}>
      <Text style={[InfoCardStyles.label, {fontFamily: 'Aurebesh-English'}]}>{label}: </Text>
      <Text style={[InfoCardStyles.info, info ? {} : InfoCardStyles.infoNotInformed, {textTransform: 'capitalize', fontFamily: 'Starkiller'}]}>
        {info ? info : "Not informad"}
      </Text>
    </View>
    </FontLoader>
  );
}