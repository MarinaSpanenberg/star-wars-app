import { Text, TouchableOpacity } from 'react-native';
import Character from './src/pages/Character';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterDetail from './src/pages/CharacterDetail';
import Vehicle from './src/pages/Vehicle';
import Film from './src/pages/Film';
import About from './src/pages/About';
import { colors, fontSizes } from './src/styles/globalStyles';
import FontLoader from './src/components/FontLoader';

const Stack = createNativeStackNavigator();


export default function App({characterName, route }) {

  return (
    <FontLoader>
    <NavigationContainer> 
      <Stack.Navigator initialRouteName={'Character'}>
      <Stack.Screen
          component={Character}
          name="Character"
          options={({navigation}) => ({
            title: "Star Wars",
            headerTitleStyle: {
              fontFamily: 'SFDistantGalaxy',
            },
            headerRight: () => (
              <TouchableOpacity
                title= "About"
                onPress= {() => 
                navigation.navigate('About')}
              >
                <Text style= {{color: colors.white, fontFamily: 'Aurebesh-English'}}>About</Text>  
              </TouchableOpacity>  
            ),
            headerStyle: {
              backgroundColor: colors.notReallyBlack
            },
            headerTintColor: colors.yellow
          })}

        />
      <Stack.Screen 
        component={CharacterDetail} 
        name="CharacterDetail" 
        options={({route}) => ({
          title: route.params.characterName,
          headerTitleStyle: {
            fontFamily: 'Aurebesh-English',
            fontSize: fontSizes.small,
          },
          headerStyle: {
            backgroundColor: colors.notReallyBlack,
          },
          headerTintColor: colors.white
        })
          }/>
      <Stack.Screen 
        component={Vehicle} 
        name="Vehicle" 
        options={({route}) => ({
          title: `${route.params.character.name} Vehicles`,
          headerTitleStyle: {
            fontFamily: 'Aurebesh-English',
            fontSize: fontSizes.small,
          },
          headerStyle: {
            backgroundColor: colors.notReallyBlack,
          },
          headerTintColor: colors.white
        })
      }
      />
      <Stack.Screen 
        component={Film} 
        name="Film" 
        options={({route}) => ({
          title: `${route.params.character.name} Films`,
          headerTitleStyle: {
            fontFamily: 'Aurebesh-English',
            fontSize: fontSizes.small,
          },
          headerStyle: {
            backgroundColor: colors.notReallyBlack,
          },
          headerTintColor: colors.white
        })
      }
        />
      <Stack.Screen 
      component={About} 
      name="About" 
      options={() => ({
        headerStyle: {
          backgroundColor: colors.notReallyBlack,
        },
        headerTintColor: colors.white
      })
    }
      />
      </Stack.Navigator>
    </NavigationContainer>
    </FontLoader>
  );
}
