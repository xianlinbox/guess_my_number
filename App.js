import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import GameStart from "./screens/game_start";
import { useState } from "react";
import Game from "./screens/game";
import GameOver from "./screens/game_over";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

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
    <LinearGradient style={styles.appContainer} colors={["#4e0329", "#ddb52f"]}>
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
