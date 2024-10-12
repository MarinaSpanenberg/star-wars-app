import { View, Text, FlatList, ActivityIndicator, Alert, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import VehicleStyles from '../styles/VehicleStyles';
import snowspeederImage from "../assets/images/vehicles/Snowspeeder.png";
import speederBikeImage from "../assets/images/vehicles/speederBike.png";
import atstImage from "../assets/images/vehicles/ATST.png";
import { LinearGradient } from 'expo-linear-gradient';
import { characterColors } from '../components/CharacterColors';
import VehicleInfoCard from '../components/VehicleInfoCard';


export default function Vehicle({ route }) {
  const { character } = route.params;
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);


  const vehicleImages = {
    "Snowspeeder": snowspeederImage,
    "Imperial Speeder Bike": speederBikeImage,
    "AT-ST": atstImage,
  };

  const gradientColors = characterColors[character.name];

  useEffect(() => {
    getVehicles();
  }, []);

  async function getVehicles() {
    if (character.vehicles.length === 0) {
      Alert.alert("This character doesn't own any vehicle!")
      return;
    }

    setLoading(true);
    try {
      const response = await Promise.all(
        character.vehicles.map(urlVehicles=> axios.get(urlVehicles)) 
      );
      setVehicles(response.map(res => res.data)); 
    } catch (error) {
      console.error('Error to search vehicles:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={VehicleStyles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
          <FlatList
            data={vehicles}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => {
              const images = vehicleImages[item.name];
              return(
              <View>
                <LinearGradient
                  colors={gradientColors}
                  style={VehicleStyles.header}
                >
                <View style={VehicleStyles.imageContainer}>
                <Image source={images} style={VehicleStyles.vehicleImage}></Image>
                </View>
                </LinearGradient>
                <View >
                  <VehicleInfoCard label={'Name'} info={item.name} />
                  <VehicleInfoCard label={'Model'} info={item.model} />
                  <VehicleInfoCard label={'Capacity'} info={item.crew} />
                </View>
              </View>
              );
            }}
          />
      )}
    </View>
  );
}
