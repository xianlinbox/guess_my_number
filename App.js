import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StyleSheet } from 'react-native'
import GameStart from './screens/game_start';

export default function App() {
  return (
    <LinearGradient style={styles.appContainer} colors={['#4e0329', '#ddb52f']}>
      <ImageBackground source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.appContainer}
        imageStyle={{ opacity: 0.15 }}>
        <GameStart />
      </ImageBackground>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
});
