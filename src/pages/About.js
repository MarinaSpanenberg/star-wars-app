import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import AboutInfoCard from '../components/AboutInfoCard';
import AboutStyles from '../styles/AboutStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../styles/globalStyles';
import meImage from "../assets/images/about/me.png";

export default function About() {
  return (
    <ScrollView style={AboutStyles.container}>
      <LinearGradient
        colors={[colors.purple, colors.notReallyBlack]}
        style={AboutStyles.header}
      >
        <View style={AboutStyles.imageContainer}>
          <Image 
            source={meImage}
            style={AboutStyles.meImage}  
          />
        </View>
      </LinearGradient>
      <View>
        <AboutInfoCard label={'Full Name'} info={'Marina Barbosa'} />
        <AboutInfoCard label={'RA'} info={'1135358'} />
        <AboutInfoCard label={'E-Mail'} info={'1135358@atitus.edu.br'} />
      </View>
    </ScrollView>
  )
}
