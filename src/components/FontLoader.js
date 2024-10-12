import React from 'react';
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';

  
export default function FontLoader({ children }) {
    const [fontsLoaded] = useFonts({
        'SFDistantGalaxy': require('../assets/fonts/SFDistantGalaxy.ttf'),
        'Aurebesh-English': require('../assets/fonts/Aurebesh-English.ttf'),
        'JediSolid': require('../assets/fonts/JediSolid.ttf'),
        'Starkiller': require('../assets/fonts/Starkiller.ttf'),
        'AlmostThere-Numeric': require('../assets/fonts/AlmostThere-Numeric.otf'),

      });
      
      if (!fontsLoaded) {
        console.log('Fonts are loading...');
        
        return <Text>Loading...</Text>; 
      }

      return(
        <View style={{flex: 1}}>
            {children}
        </View>
      );
}