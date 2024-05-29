import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import GameStart from "./screens/game_start";

import Game from "./screens/game";
import GameOver from "./screens/game_over";
import { Colors } from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  function onUserConfirm(number) {
    setUserNumber(number);
    setGameIsOver(false);
  }
  function gameOver() {
    setGameIsOver(true);
  }
  let screen = <GameStart onUserConfirm={onUserConfirm} />;
  if (userNumber) {
    screen = <Game userNumber={userNumber} gameOverHandler={gameOver} />;
  }
  if (userNumber && gameIsOver) {
    screen = <GameOver />;
  }
  return (
    <LinearGradient
      style={styles.appContainer}
      colors={[Colors.primary_purple, Colors.primary_yellow]}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView>{screen}</SafeAreaView>
        {/* <GameStart /> */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
