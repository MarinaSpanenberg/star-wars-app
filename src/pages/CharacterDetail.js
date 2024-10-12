import React from 'react'
import { View, Image, Alert, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CharacterInfoCard from '../components/CharacterInfoCard';
import CharacterDetailStyles from '../styles/CharacterDetailStyles';
import { LinearGradient } from 'expo-linear-gradient';
import DetailButton from '../components/DetailButton';
import { characterColors } from '../components/CharacterColors';
import { characterDetailImages } from '../components/CharacterImages';

export default function CharacterDetail({ route }) {
    const { character } = route.params;
    const { name, height, mass, hair_color, skin_color, eye_color, gender } = character;
    const navigation = useNavigation();

    const images = characterDetailImages[character.name];
    
    const gradientColors = characterColors[name];

    const goToVehicle = () => {
      if (character.vehicles.length === 0) {
        Alert.alert(
          "Alert",
          "This character doesn't own any vehicle!"
        );
      } else {
        navigation.navigate("Vehicle", { character });    
      }
    }  

    const goToFilm = () => {
      if (character.films.length === 0) {
        Alert.alert(
          "Alert",
          "This character doesn't show in any film!"
        );
      } else {
        navigation.navigate("Film", { character });    
      }
    }

  return (
    <ScrollView style={CharacterDetailStyles.container}>
        <LinearGradient
          colors={gradientColors}
          style={CharacterDetailStyles.header}
        >
          <View style={CharacterDetailStyles.imageContainer}>
            <Image 
              source={images}
              style={CharacterDetailStyles.characterImage}  
            />
          </View>
        </LinearGradient>

    <View >
      <View style={CharacterDetailStyles.buttonContainer}>
          <DetailButton
            title='Vehicle'
            action={goToVehicle}>
          </DetailButton>
        <DetailButton
            title='Film'
            action={goToFilm}>
          </DetailButton>
        </View>

    
      <CharacterInfoCard label={'Height'} info={height} />
      <CharacterInfoCard label={"Weight"} info={mass} />
      <CharacterInfoCard label={"Hair Color"} info={hair_color} />
      <CharacterInfoCard label={"Skin Color"} info={skin_color} />      
      <CharacterInfoCard label={"Eye Color"} info={eye_color} />
      <CharacterInfoCard label={"Gender"} info={gender} />
    
    </View>
    </ScrollView>
  );
}