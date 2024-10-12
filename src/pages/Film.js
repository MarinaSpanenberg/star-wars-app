import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FilmStyles from '../styles/FilmStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { characterColors } from '../components/CharacterColors';
import FilmInfoCard from '../components/FilmInfoCard';

/*import aNewHopeImage from "../assets/images/posters/aNewHope.png";
import attackOfTheClonesImage from "../assets/images/posters/attackOfTheClones.jpg";
import revengeOfTheSithImage from "../assets/images/posters/revengeOfTheSith.jpg";
import theEmpireStrikesBackImage from "../assets/images/posters/theEmpireStrikesBack.jpg";
import thePhantomMenaceImage from "../assets/images/posters/thePhantomMenace.jpg";
import returnOfTheJediImage from "../assets/images/posters/returnOfTheJedi.jpg";*/


export default function Film({ route }) {
  const { character } = route.params;
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  /*const filmImages = {
    "A New Hope": aNewHopeImage,
    "Attack Of The Clones": attackOfTheClonesImage,
    "Revenge Of The Sith": revengeOfTheSithImage,
    "The Empire Strikes Back": theEmpireStrikesBackImage,
    "The Phantom Menace": thePhantomMenaceImage,
    "Return Of The Jedi": returnOfTheJediImage,
  }; */ 

  const gradientColors = characterColors[character.name];

  useEffect(() => {
    getFilms();
  }, []);

  async function getFilms() {
    setLoading(true);
    try {
      const response = await Promise.all(
        character.films.map(urlFilms=> axios.get(urlFilms)) 
      );
      setFilms(response.map(res => res.data));       
    } catch (error) {
      console.error('Error to search films:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={FilmStyles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
          <FlatList
            data={films}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
              {/*const images = filmImages[item.title];*/}
              return (
              <View>
                <LinearGradient
                  colors={gradientColors}
                  style={FilmStyles.header}
                >
                <View style={FilmStyles.imageContainer}>
                {/*<Image source={images} style={FilmStyles.filmImage}></Image>*/}
                </View>
                </LinearGradient>
              <View>
                <FilmInfoCard label={'Title'} info={item.title} />
                <FilmInfoCard label={'Director'} info={item.director} />
                <FilmInfoCard label={'Release Date'} info={item.release_date} />
              </View>
              </View>
              );
            }}
          />
      )}
    </View>
  );
}