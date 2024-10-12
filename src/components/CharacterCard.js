import { Text, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import FontLoader from "./FontLoader";
import CharacterCardStyles from "../styles/CharacterCardStyles";
import { characterCardImages } from "./CharacterImages";

export default function CharacterCard({ character, goToDetails, playSound }) {
  const images = characterCardImages[character.name];

  const [isPressed, setIsPressed] = useState(false);

  return (
    <FontLoader >
    <TouchableHighlight 
      style={CharacterCardStyles.cardContainer} 
      onPress={() => {
        playSound();
        goToDetails(); }}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      >
      <View>
      <View 
        style={CharacterCardStyles.imageContainer}>
        <Image 
          source={images} 
          style={CharacterCardStyles.image} 
        />
      </View>
        <Text style={[CharacterCardStyles.text, {fontFamily: 'Aurebesh-English'}]}>{character.name}</Text>
      {!isPressed && <View style={CharacterCardStyles.overlay}/>}
      </View>
    </TouchableHighlight>
    </FontLoader>

  );
}

