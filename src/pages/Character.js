import axios from 'axios';
import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import CharacterCard from '../components/CharacterCard';
import CharacterStyles from '../styles/CharacterStyles';
import Sound from '../components/Sound';

export default function Character() {
    const navigation = useNavigation();

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState();

    const charactersIds = [1, 4, 14, 20, 13];

    const { playSound } = Sound();

    useEffect(() => {
        getCharacters();
      }, []);
    
      async function getCharacters() {
        setLoading(true);
        const response = await Promise.all(charactersIds.map(id => axios.get(`https://swapi.dev/api/people/${id}`))
        );
        setCharacters(response.map(response => response.data));
        setLoading(false);
        console.log(characters);
      }

  return (
    <View style={CharacterStyles.pageContent}>
        {loading ? ( 
          <ActivityIndicator size={"large"} />
        ) : (
          <FlatList
            style={{ width: "100%" }}
            data={characters}
            keyExtractor={(item) => item.name}
            renderItem={({item, index}) => (
              <CharacterCard
                character={item}
                playSound={playSound}
                goToDetails={() =>
                  navigation.navigate("CharacterDetail", {
                    character: item,
                    characterName: item.name,
                    position: index,
                  })
                }
             
              />
            )}
          />
        )}
      </View>
  )
}