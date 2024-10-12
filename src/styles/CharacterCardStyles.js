import { StyleSheet } from "react-native";
import { colors } from "./globalStyles";
import FontLoader from "../components/FontLoader";

export default StyleSheet.create(
    {
    cardContainer: {
      height: 150,
      marginBottom: 10,
      width: "100%",
      justifyContent: 'center', 
    },  
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    },
    imageContainer: {
      position: 'relative',
      width: '100%', 
      height: '100%',
    },
    image: {
      width: '100%', 
      height: '100%',
      position: 'absolute',
    },
    text: {
      position: 'absolute',
      bottom: 10, 
      left: 10,   
      color: colors.yellow,
      padding: 5, 
    }
  });