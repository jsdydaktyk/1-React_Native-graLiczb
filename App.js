import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './GUI/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient' ;

export default function App() {
  return (
    <LinearGradient colors={['#111aa7', '#18efff']} style={styles.container}>
    <ImageBackground source={require('./assets/dices.jpg')}
                      style={styles.container}
                      imageStyle={{opacity: 0.2}}
    >
      <StartGameScreen />
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
});
